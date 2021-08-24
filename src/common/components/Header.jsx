import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ALink from 'react-anchor-link-smooth-scroll';

import { BiToggleLeft, BiToggleRight } from 'react-icons/bi';
import { HiSun } from 'react-icons/hi';
import { RiMoonClearFill } from 'react-icons/ri';
import { showQty } from '../../functions';
import { SET_THEME } from '../../redux/actions';

export default function Header({ colec }) {
  const dispatch = useDispatch();
  const {
    screen: {
      home, fav, carT, lightTheme,
    }, cart: { cart },
  } = useSelector((state) => state);

  const [showMenu, setPagesMenu] = useState(false);
  const Qty = showQty(false, cart);

  // ---------------------------------------------------------------------------------------------
  // CICLOS DE VIDA

  // ---------------------------------------------------------------------------------------------

  return (
    <>
      {/* <!--========== HEADER ==========--> */}
      <header className="header" id="header">
        <nav className="nav bdContainer">
          <Link to="/" className="navLogo">GoShoes</Link>

          <div className={(showMenu) ? 'navMenu show' : 'navMenu'} id="nav-menu">
            <ul className="navList">
              <li
                className="navItem"
                onClick={() => setPagesMenu(!showMenu)}
                aria-hidden
              >
                {(home) ? (
                  <ALink
                    href="#home"
                    className={(home && !colec) ? (
                      'navLink activeLink') : 'navLink'}
                  >
                    Home
                  </ALink>
                ) : (
                  <Link
                    to="/"
                    className={(home && !colec) ? 'navLink activeLink' : 'navLink'}
                  >
                    Home
                  </Link>
                )}
              </li>
              <li
                className="navItem"
                onClick={() => { setPagesMenu(!showMenu); }}
                aria-hidden
              >
                {(home) ? (
                  <ALink
                    href="#shoes"
                    className={(colec) ? (
                      'navLink activeLink') : 'navLink'}
                  >
                    Coleções
                  </ALink>
                ) : (
                  <Link
                    to="/"
                    className={(colec) ? 'navLink activeLink' : 'navLink'}
                  >
                    Coleções
                  </Link>
                )}
              </li>
              <li
                className="navItem"
                onClick={() => setPagesMenu(!showMenu)}
                aria-hidden
              >
                <Link to="/favoritos" className={(fav) ? 'navLink activeLink' : 'navLink'}>Favoritos</Link>
              </li>
              <li
                className="navItem"
                onClick={() => setPagesMenu(!showMenu)}
                aria-hidden
              >
                <Link to="/carrinho" className={(carT) ? 'navLink activeLink display' : 'navLink display'}>
                  Carrinho
                  {(Qty !== 0) && (
                  <div className={(Qty === 0) ? 'numCount' : 'numCount showNumCount'}>
                    {Qty}
                  </div>
                  )}
                </Link>
              </li>

              <li
                className="changeTheme"
                id="theme-button"
                aria-hidden
                onClick={() => dispatch({ type: SET_THEME })}
              >
                { (lightTheme) ? (
                  <span>
                    <BiToggleLeft style={{ cursor: 'pointer' }} />
                    <HiSun style={{ fontSize: '1.5rem' }} />
                  </span>
                ) : (
                  <span>
                    <BiToggleRight style={{ cursor: 'pointer' }} />
                    <RiMoonClearFill style={{ fontSize: '1.5rem' }} />
                  </span>
                )}
              </li>
            </ul>
          </div>
          <div
            aria-hidden
            onClick={() => setPagesMenu(!showMenu)}
            className={(showMenu) ? 'icon iconActive' : 'icon'}
          >
            <div className="hamburguer" />
          </div>
        </nav>
      </header>
    </>
  );
}

Header.propTypes = {
  colec: PropTypes.bool,
};

Header.defaultProps = {
  colec: undefined,
};
