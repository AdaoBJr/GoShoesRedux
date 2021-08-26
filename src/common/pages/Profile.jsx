import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  FaCamera, FaFacebookF, FaTwitter, FaGoogle,
} from 'react-icons/fa';

import profileImg from '../../files/images/profile.jpg';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Profile() {
  const [showImg, setShowImg] = useState(false);
  const { user: { userName, email } } = useSelector((state) => state);

  const renderBtnsProfile = () => (
    <div className="buttonsInProfile">
      <Link to="/purchased-finish">
        <button
          type="button"
          className="buttonsFavDone"
        >
          Compras Realizadas
        </button>
      </Link>
      <Link to="/favorited">
        <button
          data-testid="profile-favorite-btn"
          type="button"
          className="buttonsFavDone"
        >
          Produtos Favoritos
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          className="buttonExit"
          onClick={() => localStorage.clear()}
        >
          Sair
        </button>
      </Link>
      <div className="loginSocial">
        <FaFacebookF className="loginSocial-icon" />
        <FaTwitter className="loginSocial-icon" />
        <FaGoogle className="loginSocial-icon" />
      </div>
    </div>
  );

  const renderProfile = () => (
    <>
      <div className={(showImg) ? 'bigImgProfile showImage' : 'bigImgProfile'}>
        <img src={profileImg} alt="img-profile" />
        <button
          type="button"
          aria-hidden
          className="close"
          onClick={() => setShowImg(!showImg)}
        />
      </div>
      <div className="profileContainer">
        <div className="profileCard">
          <div className="profileContent">
            <div className="imageProfile">
              <button
                type="button"
                className="bgCamera"
                onClick={() => setShowImg(!showImg)}
              >
                <FaCamera className="cameraIcon" />
              </button>
            </div>
            <h3 className="userName">{ userName }</h3>
            <h3 className="email">{ email }</h3>
          </div>
          {renderBtnsProfile()}
        </div>
      </div>
    </>
  );

  return (
    <>
      <Header />
      {renderProfile()}
      <Footer />
    </>
  );
}
