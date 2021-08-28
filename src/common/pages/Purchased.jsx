import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ALink from 'react-anchor-link-smooth-scroll';

import { BiUpArrowAlt } from 'react-icons/bi';
import { TiArrowBack } from 'react-icons/ti';
import store, { addCart, setDoneLoading, setFetchOnDone } from '../../redux/actions';
import { showQty } from '../../functions';
import Dashboard from '../components/DashboardPay';
import Footer from '../components/Footer';
import Loading from '../components/LoadingPay';

export default function Purchased() {
  const [ScrollY, setScrollY] = useState(false);
  const {
    screen: { fetchOn, loading, done },
    cart: { cart, totalCart },
    setScreen,
    setCart,
  } = useContext(store);

  const Qty = showQty(false, cart);
  /*= =================== SHOW SCROLL TOP ==================== */
  const scrollTop = () => {
    if (window.scrollY >= 560) { setScrollY(true); } else { setScrollY(false); }
  };
  window.addEventListener('scroll', scrollTop);

  // ---------------------------------------------------------------------------------------------

  const renderProducts = () => (
    <section className="bdContainer" id="checkout">
      {/* <!--========== SCROLL TOP ==========--> */}
      <ALink href="#checkout" className={(ScrollY) ? 'scrolltop showScroll' : 'scrolltop'}>
        <BiUpArrowAlt className="scrolltopIcon" />
      </ALink>

      <h2 className="checkoutTitle">
        Compra Concluída com Sucesso🎉🎉🎉
      </h2>
      <div className="itemsBought">
        <h4 className="checkoutCategory">
          Resumo da Compra:
        </h4>
        <p className="checkoutCategory">
          {(Qty) === 1 ? `${Qty} Item Comprado` : (
            `${Qty} Itens Comprados`)}
        </p>
        <p className="checkoutCategory">
          {`Valor: R$ ${totalCart
            .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
        </p>
      </div>
      <div className="checkoutAnimation">
        <Dashboard />
        <Link
          to="/"
          onClick={() => { setCart(addCart([])); localStorage.clear(); }}
        >
          <h3 className="checkoutBack">
            <TiArrowBack style={{ fontSize: '1.6rem' }} />
            {' '}
            Continuar Comprando?
          </h3>
        </Link>

      </div>

    </section>
  );

  const getLoading = () => {
    const LOADING_TIME = 3000;
    const DONE_TIME = 2000;

    setTimeout(() => {
      setScreen(setDoneLoading(undefined, true));
      setTimeout(() => {
        setScreen(setDoneLoading(true));
      }, DONE_TIME);
    }, LOADING_TIME);
    setScreen(setFetchOnDone(false, undefined));
  };

  // ---------------------------------------------------------------------------------------------
  // CICLOS DE VIDA

  useEffect(() => { if (fetchOn) getLoading(); });

  // ---------------------------------------------------------------------------------------------

  if (!done) { return (<Loading loading={loading} />); }
  return (
    <>
      {/* <!--========== FAVORITOS ==========--> */}
      {renderProducts()}
      <Footer />
    </>
  );
}
