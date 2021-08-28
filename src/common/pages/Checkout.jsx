import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { FaShoppingBag } from 'react-icons/fa';
import { MdError } from 'react-icons/md';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreditCard from '../components/CreditCard';
import CreditCardDash from '../components/animations/CreditCardDash';
import { setCompleteBuy } from '../../redux/actions';
import { TIME_SEC } from './Profile';

export default function Checkout() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cart: { dataCard, buyCompleted } } = useSelector((state) => state);

  const checkInsertDataCard = () => {
    if (dataCard.number !== '') {
      dispatch(setCompleteBuy(true));
      history.push('/purchased');
      setTimeout(() => {
        dispatch(setCompleteBuy(null));
      }, TIME_SEC);
    } else {
      dispatch(setCompleteBuy(false));
    }
  };

  /*= =================== MESSAGE CARDs_ERROR ==================== */
  const renderMsgCardError = () => (
    <div className={(buyCompleted === null || buyCompleted === true) ? (
      'msgLoginError') : 'msgLoginError showMsg'}
    >
      <div aria-hidden className="msgClose" onClick={() => { dispatch(setCompleteBuy(null)); }} />
      <p>Para continuar,</p>
      <p>digite todos os dados do seu cartão de crédito</p>
      <MdError style={{ fontSize: '1.4rem', marginLeft: '0.3rem' }} />
    </div>
  );

  const renderCheckout = () => (
    <>
      <h2 className="sectionTitle">Cadastre os dados do seu cartão de crédito</h2>
      <div className="checkoutContent">
        <CreditCardDash />
        <CreditCard />
        <button
          type="button"
          className="buyBtn"
          onClick={checkInsertDataCard}
        >
          <FaShoppingBag className="shopIcon" />
          Efetuar Compra
        </button>
      </div>
    </>
  );
  return (
    <>
      <Header />
      {renderMsgCardError()}
      {renderCheckout()}
      <Footer />
    </>
  );
}
