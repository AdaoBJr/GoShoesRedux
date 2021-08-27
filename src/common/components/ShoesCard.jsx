import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import {
  FaHeart, FaMinus, FaPlus, FaRegHeart, FaShippingFast, FaShoppingCart,
} from 'react-icons/fa';
import {
  CarT, Fav, showQty, threeWordsTitle,
} from '../../functions';
import { setFav, setMsgLogin } from '../../redux/actions';
import { TIME_SEC } from '../pages/Profile';

export default function ShoesCard({ screenProducts }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    products: { favorited },
    user: { logIn },
    cart: { cart },
  } = useSelector((state) => state);

  const addToCart = (product, add) => {
    if (logIn) {
      dispatch(addToCart(CarT(product, cart, add)));
      dispatch(setMsgLogin(false));
    } else {
      dispatch(setMsgLogin(true));
      setTimeout(() => {
        history.push('/profile');
      }, TIME_SEC);
    }
  };

  const addToFav = (product) => {
    if (logIn) {
      dispatch(setFav(Fav(product, favorited)));
      dispatch(setMsgLogin(false));
    } else {
      dispatch(setMsgLogin(true));
      setTimeout(() => {
        history.push('/profile');
      }, TIME_SEC);
    }
  };

  const renderShoesCard = () => (
    screenProducts.map((product, index) => {
      const {
        id, title, thumbnail, available_quantity: availableQty, price, shipping,
      } = product;
      const Qty = showQty(id, cart);

      return (
        <Link to={{ pathname: `/details/${id}`, state: { product } }}>
          <div data-aos="fade-down" data-aos-delay={200 + index * 300} className="shoesContent" key={id}>
            <img src={thumbnail} alt="" className="shoesImg" />
            <h3 className="shoesTitle">{threeWordsTitle(title)}</h3>
            <span className="shoesCategory">
              {(availableQty) === 1 ? `${availableQty} disponível` : (
                `${availableQty} disponíveis`)}
              {(shipping.free_shipping) ? (
                <div>
                  <span>Frete Grátis</span>
                  <FaShippingFast className="shoesShip_icon" />
                </div>
              ) : ''}
            </span>
            <span className="shoesPreci">
              {`R$ ${price
                .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
            </span>
            <div className="addRemoveButtons">
              <div
                aria-hidden
                className={(Qty > 0) ? 'removeButton' : 'opacity'}
                onClick={() => addToCart(product, false)}
              >
                <FaMinus />
              </div>
              <div
                aria-hidden
                className={(Qty === 0) ? 'cartItems' : 'cartItemsN1'}
                onClick={() => addToCart(product, true)}
              >
                <FaShoppingCart />
                <div className="numberItems">{ Qty }</div>
              </div>
              <div
                aria-hidden
                className={(Qty > 0) ? 'addButton' : 'opacity'}
                onClick={() => addToCart(product, true)}
              >
                <FaPlus />
              </div>
            </div>
            <div
              aria-hidden
              className="button favoritedButton"
              onClick={() => addToFav(product)}
            >
              {(favorited.find((fav) => fav.id === id)) ? <FaHeart /> : <FaRegHeart /> }
            </div>
          </div>
        </Link>
      );
    })
  );

  return (
    renderShoesCard()
  );
}
