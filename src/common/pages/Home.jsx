import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { BiUpArrowAlt } from 'react-icons/bi';
import { MdDoneAll } from 'react-icons/md';
import {
  FaArrowAltCircleUp, FaArrowAltCircleDown, FaShippingFast,
} from 'react-icons/fa';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import ALink from 'react-anchor-link-smooth-scroll';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Shoes from '../components/Shoes';
import MsgLogin from '../components/MsgLogin';
import FilterMenuDash from '../components/animations/FilterMenuDash';
import img0 from '../../files/images/img0.png';
import img1 from '../../files/images/img1.png';
import img2 from '../../files/images/img2.png';
import img3 from '../../files/images/img3.png';
import img4 from '../../files/images/img4.png';
import img6 from '../../files/images/img6.png';
import {
  OPEN_FILTER_MENU, setHighFilter, setLowFilter,
  setMsgLogInOK, setShipFilter,
} from '../../redux/actions';

export default function Home() {
  const dispatch = useDispatch();
  const [ScrollY, setScrollY] = useState(false);
  const {
    user: { msgLoginOK },
    screen: {
      lightTheme, openFilter, highFilter, lowFilter, shipFilter,
    },
  } = useSelector((state) => state);

  /*= ==== MOUSEMOVE HOME IMG ===== */
  const move = (e) => {
    document.querySelectorAll('.move').forEach((layer) => {
      const speed = layer.getAttribute('data-speed');

      const x = (window.innerWidth - e.pageX * speed) / 120;
      const y = (window.innerHeight - e.pageY * speed) / 120;

      // eslint-disable-next-line no-param-reassign
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };
  document.addEventListener('mousemove', move);

  /*= =================== SHOW SCROLL TOP ==================== */
  const scrollTop = () => {
    if (window.scrollY >= 560) { setScrollY(true); } else { setScrollY(false); }
  };
  window.addEventListener('scroll', scrollTop);

  /*= =================== MESSAGE LOGIN_OK ==================== */
  const renderMsgLoginOK = () => (
    <div className={(msgLoginOK) ? 'msgLoginOK showMsg' : 'msgLogin'}>
      <div aria-hidden className="msgClose" onClick={() => { dispatch(setMsgLogInOK(true, false)); }} />
      <div className="msgContent">
        <p>Login efetuado com sucesso! </p>
        <MdDoneAll className="msgContent_icon" />
      </div>
    </div>
  );

  /*= =================== FILTER MENU ==================== */
  const classFilterMenu = () => {
    if (openFilter && lightTheme) {
      return 'openFilterMenu showFilter menuLight';
    }
    if (openFilter && !lightTheme) {
      return 'openFilterMenu showFilter menuDark';
    }
    return 'openFilterMenu menuLight';
  };

  const renderFilterMenu = () => (
    <div className={classFilterMenu()}>
      <div aria-hidden className="msgClose" onClick={() => { dispatch({ type: OPEN_FILTER_MENU }); }} />
      <div>
        <p className="titleFilter">Filtrar Produtos</p>
        <ul className="menuFilter">
          {(highFilter) ? (
            <li
              aria-hidden
              className="filterName"
              onClick={() => { dispatch(setHighFilter(false)); }}
            >
              <FaArrowAltCircleUp className="btnFilterLeft" style={{ marginRight: '.5rem' }} />
              Maior valor
              <BsToggleOn className="btnFilterOn" />
            </li>
          ) : (
            <li
              aria-hidden
              className="filterName"
              onClick={() => { dispatch(setHighFilter(true)); }}
            >
              <FaArrowAltCircleUp className="btnFilterLeft" style={{ marginRight: '.5rem' }} />
              Maior valor
              <BsToggleOff className="btnFilterOff" />
            </li>
          )}
          {(lowFilter) ? (
            <li
              aria-hidden
              className="filterName"
              onClick={() => { dispatch(setLowFilter(false)); }}
            >
              <FaArrowAltCircleDown className="btnFilterLeft" style={{ marginRight: '.5rem' }} />
              Menor valor
              <BsToggleOn className="btnFilterOn" />
            </li>
          ) : (
            <li
              aria-hidden
              className="filterName"
              onClick={() => { dispatch(setLowFilter(true)); }}
            >
              <FaArrowAltCircleDown className="btnFilterLeft" style={{ marginRight: '.5rem' }} />
              Menor valor
              <BsToggleOff className="btnFilterOff" />
            </li>
          )}
          {(shipFilter) ? (
            <li
              aria-hidden
              className="filterName"
              onClick={() => { dispatch(setShipFilter(false)); }}
            >
              <FaShippingFast className="btnFilterLeft" style={{ marginRight: '.5rem' }} />
              Frete Grátis
              <BsToggleOn className="btnFilterOn" />
            </li>
          ) : (
            <li
              aria-hidden
              className="filterName"
              onClick={() => { dispatch(setShipFilter(true)); }}
            >
              <FaShippingFast className="btnFilterLeft" style={{ marginRight: '.5rem' }} />
              Frete Grátis
              <BsToggleOff className="btnFilterOff" />
            </li>
          )}
        </ul>
        <FilterMenuDash />
      </div>
    </div>
  );

  // ---------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(() => { Aos.init({ duration: 2000 }); }, []);

  // ---------------------------------------------------------------------------------------------

  return (
    <div>
      {/* <!--========== SCROLL TOP ==========--> */}
      <ALink href="#home" className={(ScrollY) ? 'scrolltop showScroll' : 'scrolltop'} id="scroll-top">
        <BiUpArrowAlt className="scrolltopIcon" />
      </ALink>

      {/*  =================== MESSAGE LOGIN ==================== */}
      <MsgLogin />

      {/*  =================== MESSAGE LOGIN_OK ==================== */}
      { renderMsgLoginOK() }

      {/* =================== FILTER MENU ==================== */}
      { renderFilterMenu() }

      {/* <!--========== HEADER ==========--> */}
      <Header colec={ScrollY} />

      <main className="main">
        {/* <!--========== HOME ==========--> */}
        <section className="home" id="home">
          <div className="homeContainer bdGrid">
            <div data-aos="fade-down" data-aos-delay="500" className="homeImg">
              <img src={img0} alt="img-1" data-speed="-2" className="imgs move" />
              <img src={img1} alt="img-1" data-speed="7" className="imgs move" />
              <img src={img2} alt="img-2" data-speed="-4" className="imgs move" />
              <img src={img4} alt="img-4" data-speed="3" className="imgs move" />
              <img src={img3} alt="img-3" data-speed="-5" className="img3 move" />
              <img src={img6} alt="img-6" data-speed="2" className="img6 move" />
            </div>
            <div data-aos="fade-down" className="homeData">
              <h1 className="homeTitle">
                GoShoes
              </h1>
              <p className="homeDescription">
                Let&#39;s shop?
                {' '}
                <br />
                {' '}
                Let&#39;s GoShoes.
              </p>
              <ALink href="#shoes" className="homeButton">Get Started</ALink>
            </div>
          </div>
        </section>

        {/* <!--========== COLEÇÕES ==========--> */}
        <Shoes />
      </main>
      {/* <!--========== FOOTER ==========--> */}
      <Footer />
    </div>
  );
}
