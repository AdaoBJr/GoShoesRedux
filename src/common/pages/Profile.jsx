import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { BiLockAlt, BiUser } from 'react-icons/bi';
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';
import { MdError } from 'react-icons/md';

import {
  addLogin, setFetchOnDone, setMsgLoginError, setMsgLogInOK, setSignUp,
} from '../../redux/actions';
import { AddToUsers } from '../../functions';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GoLogout from '../components/GoLogout';
import GoLoginDash from '../components/animations/GoLoginDash';

const initialLogin = {
  LuserName: '',
  Lemail: '',
  Lpassword: '',
};

const initialRegister = {
  RuserName: '',
  Remail: '',
  Rpassword: '',
};

export const TIME_SEC = 6000;

export default function Profile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [register, setRegister] = useState(initialRegister);
  const [login, setLogin] = useState(initialLogin);

  const { RuserName, Remail, Rpassword } = register;
  const { Lemail, Lpassword } = login;
  const {
    user: {
      logIn, msgLoginError, msgLoginNotExist, signUp, users,
    },
  } = useSelector((state) => state);

  const validationEmailPwd = () => {
    const regex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const Email = regex.test(Remail) || regex.test(Lemail);
    const Pwd = Rpassword.length || Lpassword.length;
    const minPwd = 7;

    if (Email && Pwd >= minPwd) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  };

  const closeMsgLoginOK = () => {
    setTimeout(() => {
      dispatch(setMsgLogInOK(true, true));
      setTimeout(() => {
        dispatch(setMsgLogInOK(true, false));
      }, TIME_SEC);
    }, TIME_SEC);
  };

  const closeMsgLoginError = (error, notExist) => {
    dispatch(setMsgLoginError(error, notExist));

    setTimeout(() => {
      dispatch(setMsgLoginError(false));
    }, TIME_SEC);
  };

  const handleChange = ({ target: { name, value } }, state) => {
    if (state === 'login') { setLogin({ ...login, [name]: value }); }
    if (state === 'register') { setRegister({ ...register, [name]: value }); }
  };

  const handleClickRegister = () => {
    setLogin({ ...login, LuserName: RuserName });
    dispatch(addLogin(AddToUsers(register, users, Remail)));
    setDisabledBtn(true);
    setRegister(initialRegister);
  };

  const handleLogin = () => {
    const atualUser = users.filter((item) => item.email === Lemail);
    if (atualUser.length) {
      if (Lemail === atualUser[0].email && Lpassword === atualUser[0].password) {
        dispatch(addLogin(AddToUsers(false, users, Lemail)));
        dispatch(setFetchOnDone(true, undefined));
        closeMsgLoginOK();
        setDisabledBtn(true);
        history.push('/');
      } else {
        closeMsgLoginError(true, false);
      }
    } else {
      closeMsgLoginError(false, true);
      setDisabledBtn(true);
    }
  };

  const handleClickLogin = () => {
    handleLogin();
  };

  const handleKeyPressLogin = ({ key }) => {
    if (key === 'Enter') { handleLogin(); }
  };

  /*= =================== MESSAGE LOGIN_ERROR ==================== */
  const renderMsgLoginOK = () => (
    <div className={(msgLoginError || msgLoginNotExist) ? 'msgLoginError showMsg' : 'msgLoginError'}>
      <div aria-hidden className="msgClose" onClick={() => { dispatch(setMsgLoginError(false)); }} />
      <p>Login não efetuado,</p>
      <div className="msgContent">
        {(msgLoginError) ? <p>erro no usuário e/ou senha</p> : ''}
        {(msgLoginNotExist) ? <p>usuário não cadastrado no sistema</p> : ''}
        <MdError style={{ fontSize: '1.4rem', marginLeft: '0.3rem' }} />
      </div>
    </div>
  );

  const renderLogin = () => (
    <div className="login">
      <div className="loginAnim">
        <GoLoginDash page="login" />
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
              onKeyPress={handleKeyPressLogin}
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
              onKeyPress={handleKeyPressLogin}
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
  if (logIn) { return <GoLogout />; }
  return (
    <>
      <Header />
      {renderMsgLoginOK()}
      {renderLogin()}
      <Footer />
    </>
  );
}
