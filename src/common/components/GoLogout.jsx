import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RiLogoutBoxRFill } from 'react-icons/ri';
import { addLogin, setLogOut } from '../../redux/actions';

import Footer from './Footer';
import GoLoginDash from './animations/GoLoginDash';
import Header from './Header';
import confete from '../../files/images/confete.png';
import ProfileHeader from './ProfileHeader';
import { AddToUsers } from '../../functions';

export default function GoLogout() {
  const { user: { users } } = useSelector((state) => state);
  const dispatch = useDispatch();

  const renderGoLogout = () => (
    <>
      <Header />
      <div className="titleLogout">
        <h1 className="goLoginTitle">Você está conectado, tudo certo por aqui!</h1>
        <div><img src={confete} alt="confete-img" /></div>
      </div>

      <div className="cartLogin">
        <ProfileHeader />
        <GoLoginDash page="logout" />
        <Link to="/profile">
          <button
            type="button"
            className="loginSignin"
            onClick={() => {
              dispatch(setLogOut()); dispatch(addLogin(AddToUsers(false, users, false)));
            }}
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
