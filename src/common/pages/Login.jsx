import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { BiLockAlt, BiUser } from 'react-icons/bi';
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';

import imgLogin from '../../files/images/img-login.svg';
import { addLogin, setLogIn, setSignUp } from '../../redux/actions';
import { setStorage } from '../../functions';
import Header from '../components/Header';
import Footer from '../components/Footer';

const initialLogin = {
  logIn: null,
  LuserName: '',
  Lemail: '',
  Lpassword: '',
};

const initialRegister = {
  RuserName: '',
  Remail: '',
  Rpassword: '',
};

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [register, setRegister] = useState(initialRegister);
  const [login, setLogin] = useState(initialLogin);

  const { RuserName, Remail, Rpassword } = register;
  const { LuserName, Lemail, Lpassword } = login;
  const { user: { signUp, email, password } } = useSelector((state) => state);

  const validationEmailPwd = () => {
    const regex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const Email = regex.test(Remail) || regex.test(Lemail);
    console.log(Email);
    const Pwd = Rpassword.length || Lpassword.length;
    console.log(Pwd);
    const minPwd = 7;

    if (Email && Pwd >= minPwd) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  };

  const handleChange = ({ target: { name, value } }, state) => {
    if (state === 'login') { setLogin({ ...login, [name]: value }); }
    if (state === 'register') { setRegister({ ...register, [name]: value }); }
  };

  const handleClickRegister = () => {
    dispatch(addLogin(RuserName, Remail, Rpassword));
    setLogin({
      ...login, LuserName: RuserName, Lemail: Remail, Lpassword: Rpassword,
    });
    setRegister(initialRegister);
    setDisabledBtn(true);
  };

  const handleClickLogin = () => {
    if (Lemail === email && Lpassword === password) {
      dispatch(setLogIn(true));
      setLogin({ ...login, logIn: true });
      setStorage('LSuser', { LuserName, Lemail, Lpassword });
      setDisabledBtn(true);
      history.push('/');
    } else {
      setLogin({ ...login, logIn: false });
    }
  };

  const renderLogin = () => (
    <div className="login">
      <div className="loginImg">
        <img src={imgLogin} alt="img-login" />
      </div>

      <div className="loginForms">
        <form className={(signUp) ? 'loginRegister none' : 'loginRegister'}>
          <h1 className="loginTitle">Sign In</h1>

          <div className="loginBox">
            <BiUser className="loginIcon" />
            <input
              name="Lemail"
              placeholder="Insira seu e-mail"
              autoComplete="off"
              className="loginInput"
              onChange={(e) => handleChange(e, 'login')}
            />
          </div>

          <div className="loginBox">
            <BiLockAlt className="loginIcon" />
            <input
              type="password"
              name="Lpassword"
              placeholder="Insira sua senha de 7 dígitos"
              className="loginInput"
              onChange={(e) => handleChange(e, 'login')}
            />
          </div>

          <a href className="loginForgot">Esqueceu sua senha?</a>

          <button
            type="button"
            className="loginButton"
            disabled={disabledBtn}
            onClick={handleClickLogin}
          >
            Entrar
          </button>

          <div>
            <span className="loginAccount">Não tem uma conta ?</span>
            <button
              type="button"
              onClick={() => dispatch(setSignUp())}
              className="loginSignin"
            >
              Registre-se
            </button>
          </div>
        </form>

        <form className={(signUp) ? 'loginCreate' : 'loginCreate none'}>
          <h1 className="loginTitle">Crie sua conta</h1>

          <div className="loginBox">
            <BiUser className="loginIcon" />
            <input
              type="text"
              name="RuserName"
              value={RuserName}
              placeholder="Username"
              autoComplete="off"
              className="loginInput"
              onChange={(e) => handleChange(e, 'register')}
            />
          </div>

          <div className="loginBox">
            <BiLockAlt className="loginIcon" />
            <input
              name="Remail"
              value={Remail}
              placeholder="Insira um e-mail válido"
              autoComplete="off"
              className="loginInput"
              onChange={(e) => handleChange(e, 'register')}
            />
          </div>

          <div className="loginBox">
            <BiLockAlt className="loginIcon" />
            <input
              type="password"
              name="Rpassword"
              value={Rpassword}
              placeholder="Insira uma senha de 7 dígitos"
              className="loginInput"
              onChange={(e) => handleChange(e, 'register')}
            />
          </div>

          <button
            type="button"
            className="loginButton"
            disabled={disabledBtn}
            onClick={() => { dispatch(setSignUp()); handleClickRegister(); }}
          >
            Criar
          </button>

          <div>
            <span className="loginAccount">Já tem uma conta ?</span>
            <button
              type="button"
              onClick={() => dispatch(setSignUp())}
              className="loginSignup"
            >
              Acessar conta
            </button>
          </div>

          <div className="loginSocial">
            <FaFacebookF className="loginSocial-icon" />
            <FaTwitter className="loginSocial-icon" />
            <FaGoogle className="loginSocial-icon" />
          </div>
        </form>
      </div>
    </div>
  );

  // CICLOS DE VIDA --------------------------------------------------------------------------

  useEffect(validationEmailPwd, [Remail, Rpassword, Lemail, Lpassword]);

  // ------------------------------------------------------------------------------------------
  return (
    <>
      <Header />
      {renderLogin()}
      <Footer />
    </>
  );
}
