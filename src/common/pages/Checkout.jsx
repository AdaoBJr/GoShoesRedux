import React from 'react';
import { Link } from 'react-router-dom';

import { FaShoppingBag } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreditCard from '../components/CreditCard';
import CreditCardDash from '../components/CreditCardDash';

export default function Checkout() {
  const renderCheckout = () => (
    <>
      <h2 className="sectionTitle">Cadastre os dados do seu cartão de crédito</h2>
      <div className="checkoutContent">
        <CreditCardDash />
        <CreditCard />
        <Link to="/purchased">
          <button
            type="button"
            className="buyBtn"
            // onClick={() => dispatch(setFetchOnDone(true))}
          >
            <FaShoppingBag className="shopIcon" />
            Efetuar Compra
          </button>
        </Link>
      </div>
    </>
  );
  return (
    <>
      <Header />
      {renderCheckout()}
      <Footer />
    </>
  );
}
