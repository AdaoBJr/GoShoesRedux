import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RiLogoutBoxRFill } from 'react-icons/ri';
import { addLogin, setLogOut } from '../../redux/actions';

import Footer from './Footer';
import GoLoginDash from './animations/GoLoginDash';
import Header from './Header';
import confete from '../../files/images/confete.png';
import iconPerfil from '../../files/images/iconPerfil.png';
import ProfileHeader from './ProfileHeader';
import { AddPhotoToUsers, AddToUsers } from '../../functions';

export default function GoLogout() {
  const { user: { users } } = useSelector((state) => state);
  const dispatch = useDispatch();

  const renderInsertImage = () => {
    const getFiles = ({ target: { files } }) => {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        dispatch(addLogin(AddPhotoToUsers(users, reader.result)));
      });

      reader.readAsDataURL(files[0]);
    };

    return (
      <div className="logOutInsertImage">
        <h3>Alterar imagem do perfil</h3>
        <label htmlFor="uploadImage">
          <input
            type="file"
            id="uploadImage"
            className="logOutInputFile"
            onChange={getFiles}
          />
          Escolha uma imagem
        </label>
        <img src={iconPerfil} alt="icon-perfil" />
      </div>
    );
  };

  const renderGoLogout = () => (
    <>
      <Header />
      <div className="titleLogout">
        <h1 className="goLoginTitle">Você está conectado, tudo certo por aqui!</h1>
        <div><img src={confete} alt="confete-img" /></div>
      </div>

      {renderInsertImage()}

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
          <RiLogoutBoxRFill style={{ verticalAlign: 'middle', color: 'black' }} className="footerSocial" />
        </Link>
      </div>
      <Footer />
    </>
  );

  return (
    renderGoLogout()
  );
}
