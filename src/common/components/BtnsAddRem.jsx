import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import { addCart, setMsgLogin } from '../../redux/actions';
import { CarT, showQty } from '../../functions';
import { TIME_SEC } from '../pages/Profile';

export default function BtnsAddRem({ product }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    cart: { cart },
    user: { logIn },
  } = useSelector((state) => state);

  const Qty = showQty(product.id, cart);

  const addToCart = (add) => {
    if (logIn) {
      dispatch(addCart(CarT(product, cart, add)));
      dispatch(setMsgLogin(false));
    } else {
      dispatch(setMsgLogin(true));
      setTimeout(() => {
        history.push('/profile');
      }, TIME_SEC);
    }
  };

  const renderAddRemBtns = () => (
    <div className="addRemoveButtons">
      <div
        aria-hidden
        className={(Qty > 0) ? 'removeButton' : 'opacity'}
        onClick={() => addToCart(false)}
      >
        <FaMinus />
      </div>
      <div
        aria-hidden
        className={(Qty === 0) ? 'cartItems' : 'cartItemsN1'}
        onClick={() => addToCart(true)}
      >
        <FaShoppingCart />
        <div className="numberItems">{ Qty }</div>
      </div>
      <div
        aria-hidden
        className={(Qty > 0) ? 'addButton' : 'opacity'}
        onClick={() => addToCart(true)}
      >
        <FaPlus />
      </div>
    </div>
  );
  return (
    renderAddRemBtns()
  );
}
