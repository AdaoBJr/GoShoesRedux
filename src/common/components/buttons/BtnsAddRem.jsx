import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import { addCart, setMsgLogin } from '../../../redux/actions';
import { CarT, showQty } from '../../../functions';
import { TIME_SEC } from '../../pages/Profile';

export default function BtnsAddRem({ product }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    cart: { cart },
    user: { logIn },
    screen: { details },
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

  const classAddCartBtn = () => {
    if (details) {
      if (Qty === 0) {
        return 'cartItemsDetails';
      }
      return 'cartItemsN1Details';
    }
    if (Qty === 0) {
      return 'cartItems';
    }
    return 'cartItemsN1';
  };

  const renderAddRemBtns = () => (
    <div
      className={(details) ? 'addRemoveBtnsDetails' : 'addRemoveButtons'}
    >
      <div
        aria-hidden
        className={(Qty > 0) ? 'removeButton' : 'opacity'}
        onClick={() => addToCart(false)}
      >
        <FaMinus />
      </div>
      <div
        aria-hidden
        className={classAddCartBtn()}
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
