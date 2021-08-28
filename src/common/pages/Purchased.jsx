import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ALink from 'react-anchor-link-smooth-scroll';

import { BiUpArrowAlt } from 'react-icons/bi';
import { TiArrowBack } from 'react-icons/ti';
import confete from '../../files/images/confete.png';
import {
  addCart, setDoneLoading, setFav, setFetchOnDone,
} from '../../redux/actions';
import { showQty } from '../../functions';
import Dashboard from '../components/DashboardPay';
import Footer from '../components/Footer';
import LoadingPay from '../components/LoadingPay';

export default function Purchased() {
  const dispatch = useDispatch();
  const [ScrollY, setScrollY] = useState(false);
  const {
    screen: { fetchOn, loading, done },
    cart: { cart, totalCart },
  } = useSelector((state) => state);

  const Qty = showQty(false, cart);
  /*= =================== SHOW SCROLL TOP ==================== */
  const scrollTop = () => {
    if (window.scrollY >= 560) { setScrollY(true); } else { setScrollY(false); }
  };
  window.addEventListener('scroll', scrollTop);

  /*= =================== KEEP BUYING ==================== */
  const keepBuying = () => {
    dispatch(addCart([]));
    dispatch(setFav([]));
    localStorage.removeItem('LScart');
    localStorage.removeItem('LSfav');
    localStorage.removeItem('LScartSum');
  };

  // ---------------------------------------------------------------------------------------------

  const renderProducts = () => (
    <section className="bdContainer" id="purchased">
      {/* <!--========== SCROLL TOP ==========--> */}
      <ALink href="#purchased" className={(ScrollY) ? 'scrolltop showScroll' : 'scrolltop'}>
        <BiUpArrowAlt className="scrolltopIcon" />
      </ALink>

      <div className="titleLogout">
        <h2 className="goLoginTitle">Compra Concluída com Sucesso!</h2>
        <div><img src={confete} alt="confete-img" /></div>
        <div><img src={confete} alt="confete-img" /></div>

      </div>
      <div className="itemsBought">
        <h4 className="purchasedCategory">
          Resumo da Compra:
        </h4>
        <p className="purchasedCategory">
          {(Qty) === 1 ? `${Qty} Item Comprado` : (
            `${Qty} Itens Comprados`)}
        </p>
        <p className="purchasedCategory">
          {`Valor: R$ ${totalCart
            .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
        </p>
      </div>
      <div className="purchasedAnimation">
        <Dashboard />
        <Link
          to="/"
          onClick={keepBuying}
        >
          <h3 className="purchasedBack">
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
      dispatch(setDoneLoading(undefined, true));
      setTimeout(() => {
        dispatch(setDoneLoading(true));
      }, DONE_TIME);
    }, LOADING_TIME);
    dispatch(setFetchOnDone(false, undefined));
  };

  // ---------------------------------------------------------------------------------------------
  // CICLOS DE VIDA

  useEffect(() => { if (fetchOn) getLoading(); });

  // ---------------------------------------------------------------------------------------------

  if (!done) { return (<LoadingPay loading={loading} />); }
  return (
    <>
      {/* <!--========== FAVORITOS ==========--> */}
      {renderProducts()}
      <Footer />
    </>
  );
}
