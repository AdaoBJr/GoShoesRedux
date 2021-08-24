import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTrash, FaShoppingBag } from 'react-icons/fa';
import { TiCancel } from 'react-icons/ti';

import { addCart, addTotalCart, setFetchOnDone } from '../../redux/actions';
import { sumCart } from '../../functions';

export default function CartFooter() {
  const dispatch = useDispatch();
  const [minWidth, setMinWidth] = useState(false);

  const {
    cart: { updateSum, cart, totalCart },
  } = useSelector((state) => state);

  const checkWidthScreen = () => {
    const MIN_WIDTH = 768;
    const screenWidth = window.innerWidth;

    if (screenWidth >= MIN_WIDTH) {
      setMinWidth(true);
    } else {
      setMinWidth(false);
    }
  };

  // ---------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(checkWidthScreen, []);
  window.addEventListener('resize', () => checkWidthScreen());

  useEffect(() => { if (updateSum) { dispatch(addTotalCart(sumCart(cart))); } });
  // ---------------------------------------------------------------------------------------------

  return (
    <>
      {/* <!--========== FOOTERCART ==========--> */}
      <footer className="footerNav footerCart">
        <button
          type="button"
          className="trashCancelBtn"
          onClick={() => { dispatch(addCart([])); localStorage.clear(); }}
        >
          <FaTrash className="clearIcon" />
          {(minWidth) ? 'Limpar Carrinho' : 'Limpar'}
        </button>
        <Link to="/">
          <button
            type="button"
            className="trashCancelBtn"
          >
            <TiCancel className="cancelIcon" />
            {(minWidth) ? 'Cancelar Compra' : 'Cancelar'}
          </button>
        </Link>
        <div className="totalCart">
          <h3>
            {(minWidth) ? `Total: R$ ${totalCart
              .toLocaleString('pt-br', { minimumFractionDigits: 2 })}` : `R$ ${totalCart
              .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
          </h3>
        </div>
        <Link to="/checkout">
          <button
            type="button"
            className="shopBtn"
            onClick={() => dispatch(setFetchOnDone(true))}
          >
            <FaShoppingBag className="shopIcon" />
            Comprar
          </button>
        </Link>
      </footer>
    </>
  );
}
