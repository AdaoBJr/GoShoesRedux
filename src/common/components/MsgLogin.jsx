import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setMsgLogin, setSignUp } from '../../redux/actions';

export default function MsgLogin() {
  const dispatch = useDispatch();
  const { user: { msgLogin } } = useSelector((state) => state);
  /*= =================== MESSAGE LOGIN ==================== */
  const renderMsgLogin = () => (
    <div className={(msgLogin) ? 'msgLogin showMsg' : 'msgLogin'}>
      <div aria-hidden className="msgClose" onClick={() => { dispatch(setMsgLogin(false)); }} />
      <p className="msgContent">Para continuar, </p>
      <p className="msgContent">você deve efetuar o acesso a sua conta GoShoes</p>
      <p className="msgContent">você será redirecionado em breve</p>

      <br />
      <Link to="/profile">
        <button
          type="button"
          className="loginSignin"
          onClick={() => { dispatch(setMsgLogin(false)); }}
          style={{ marginBottom: '.8rem' }}
        >
          Acessar Login
        </button>
      </Link>
      <p className="loginAccount">Não tem uma conta ?</p>
      <Link to="/profile">
        <button
          type="button"
          onClick={() => { dispatch(setSignUp()); dispatch(setMsgLogin(false)); }}
          className="loginSignin"
        >
          Registre-se
        </button>
      </Link>
    </div>
  );
  return (
    renderMsgLogin()
  );
}
