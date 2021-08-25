import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {
  FaHeart, FaRegHeart, FaMinus, FaPlus, FaShoppingCart,
} from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import {
  getProducts, addCart, setFav, setMsgLogin,
} from '../../redux/actions';
import { Fav, CarT, showQty } from '../../functions';

export default function Shoes() {
  const dispatch = useDispatch();
  const initialPage = {
    qtyPgs: 1, numPgs: [], atualPg: 1, qtyPgsFloor: 1, initialPg: 0, limitPg: 6, cardsLimit: 6,
  };
  const [pages, setPages] = useState(initialPage);

  const {
    products: { products, favorited },
    cart: { cart },
    user: { logIn },
  } = useSelector((state) => state);

  const threeWordsTitle = (title) => {
    const newName = `${title.split(' ')[0]} ${title.split(' ')[1]} ${title.split(' ')[2]}`;
    return newName;
  };

  const qtyPages = () => {
    const { cardsLimit, numPgs } = pages;
    const qtyPgsFull = products.length / cardsLimit;
    const qtyPgsFloor = Math.floor(qtyPgsFull);
    const qtyPgs = Math.ceil(qtyPgsFull);

    for (let i = 1; i <= qtyPgs; i += 1) { numPgs.push(i); }

    setPages({ ...pages, qtyPgs, qtyPgsFloor });
  };

  const nextPage = () => {
    const { limitPg, cardsLimit, atualPg } = pages;

    if (limitPg >= products.length - 1) {
      setPages({
        ...pages, initialPg: 0, limitPg: 6, atualPg: 1,
      });
    } else {
      setPages((prevState) => ({
        ...pages,
        initialPg: prevState.initialPg + cardsLimit,
        limitPg: prevState.limitPg + cardsLimit,
        atualPg: atualPg + 1,
      }));
    }
  };

  const prevPage = () => {
    const {
      initialPg, cardsLimit, qtyPgsFloor, qtyPgs, atualPg,
    } = pages;

    if (initialPg === 0) {
      setPages({
        ...pages,
        initialPg: cardsLimit * qtyPgsFloor,
        limitPg: cardsLimit * (qtyPgsFloor) + cardsLimit,
        atualPg: qtyPgs,
      });
    } else {
      setPages((prevState) => ({
        ...pages,
        initialPg: prevState.initialPg - cardsLimit,
        limitPg: prevState.limitPg - cardsLimit,
        atualPg: atualPg - 1,
      }));
    }
  };

  const selectedPage = (numPg) => {
    const { cardsLimit } = pages;

    setPages({
      ...pages,
      initialPg: (numPg - 1) * cardsLimit,
      limitPg: numPg * cardsLimit,
      atualPg: numPg,
    });
  };

  const addToCart = (product, add) => {
    if (logIn) {
      dispatch(addCart(CarT(product, cart, add)));
      dispatch(setMsgLogin(false));
    } else {
      dispatch(setMsgLogin(true));
      dispatch(addCart(CarT(product, cart, add)));
    }
  };

  const renderProducts = (Products) => {
    const {
      initialPg, limitPg, numPgs, atualPg,
    } = pages;

    const screenProducts = Products.slice(initialPg, limitPg);
    return (
      <section className="shoes section bdContainer" id="shoes">
        <h2 data-aos="fade-down" className="sectionTitle">
          Calçados e Acessórios
        </h2>

        <h2 data-aos="fade-down" className="collectionTitle">
          Novas Coleções
        </h2>
        <div className="shoesContainer bdGrid">
          {screenProducts.map((product, index) => {
            const {
              id, title, thumbnail, available_quantity: availableQty, price,
            } = product;
            const Qty = showQty(id, cart);

            return (
              <div data-aos="fade-down" data-aos-delay={200 + index * 300} className="shoesContent" key={id}>
                <img src={thumbnail} alt="" className="shoesImg" />
                <h3 className="shoesTitle">{threeWordsTitle(title)}</h3>
                <span className="shoesCategory">
                  {(availableQty) === 1 ? `${availableQty} disponível` : (
                    `${availableQty} disponíveis`)}
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
                  onClick={() => dispatch(setFav(Fav(product, favorited)))}
                >
                  {(favorited.find((fav) => fav.id === id)) ? <FaHeart /> : <FaRegHeart /> }
                </div>
              </div>
            );
          })}
        </div>
        <ul className="pageContent">
          <li><MdKeyboardArrowLeft onClick={prevPage} className="arrowPage brLeft" /></li>
          {numPgs.map((num) => (
            <li
              aria-hidden
              key={num}
              onClick={() => selectedPage(num)}
              className={(num === atualPg) ? 'numPage atualPg' : 'numPage'}
            >
              {num}
            </li>
          )) }
          <li><MdKeyboardArrowRight onClick={nextPage} className="arrowPage brRight" /></li>
        </ul>
      </section>
    );
  };

  // ----------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(() => { dispatch(getProducts()); }, []);
  useEffect(() => { if (pages.qtyPgs <= 1) { qtyPages(); } }, [products]);
  useEffect(() => { Aos.init({ duration: 2000 }); }, []);

  // ----------------------------------------------------------------------------------------------

  if (!products?.length) { return (<></>); }
  return (
    renderProducts(products)
  );
}
