import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { RiLogoutBoxRFill } from 'react-icons/ri';
import { setLogOut } from '../../redux/actions';

import Footer from './Footer';
import GoLoginDash from './GoLoginDash';
import Header from './Header';
import confete from '../../files/images/confete.png';

export default function GoLogout() {
  const dispatch = useDispatch();

  const renderGoLogout = () => (
    <>
      <Header />
      <div className="titleLogout">
        <h1 className="goLoginTitle">Você está conectado, tudo certo por aqui</h1>
        <div><img src={confete} alt="confete-img" /></div>
      </div>

      <div className="cartLogin">
        <GoLoginDash page="logout" />
        <Link to="/login">
          <button
            type="button"
            className="loginSignin"
            onClick={() => { dispatch(setLogOut()); }}
          >
            Desconectar
          </button>
          <RiLogoutBoxRFill style={{ verticalAlign: 'middle' }} className="footerSocial" />
        </Link>
      </div>
      <Footer />
    </>
  );

  return (
    renderGoLogout()
  );
}
