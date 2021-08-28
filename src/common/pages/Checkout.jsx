import React from 'react';
import { Link } from 'react-router-dom';

import { FaShoppingBag } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreditCard from '../components/CreditCard';

export default function Checkout() {
  const renderCheckout = () => (
    <>
      <div className="titleLogout">
        <h1 className="goLoginTitle">Cadastre os dados do seu cartão de crédito</h1>

      </div>

      <div className="cartLogin">
        <CreditCard />
        <Link to="/purchased">
          <button
            type="button"
            className="shopBtn"
            // onClick={() => dispatch(setFetchOnDone(true))}
          >
            <FaShoppingBag className="shopIcon" />
            Pagamento
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
