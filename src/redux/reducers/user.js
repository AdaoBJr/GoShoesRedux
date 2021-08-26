import {
  ADD_LOGIN, SET_LOG_IN, SET_SIGN_UP, SET_MSG_LOGIN,
  SET_LOG_OUT, SET_MSG_LOGIN_OK, SET_MSG_LOGIN_ERROR,
} from '../actions';

export const USER = {
  logIn: false,
  signUp: false,
  msgLogin: false,
  msgLoginOK: false,
  msgLoginError: false,
  userName: '',
  email: '',
  password: '',
};

const userReducer = (state = USER, { type, payload }) => { // Desestruturação do Action
  switch (type) {
    case SET_LOG_IN: {
      const { logIn } = payload;
      return {
        ...state,
        logIn,
      };
    }
    case SET_SIGN_UP: {
      return {
        ...state,
        signUp: !state.signUp,
      };
    }
    case SET_MSG_LOGIN: {
      const { msgLogin } = payload;
      return {
        ...state,
        msgLogin,
      };
    }
    case SET_MSG_LOGIN_OK: {
      const { logIn, msgLoginOK } = payload;
      return {
        ...state,
        logIn,
        msgLoginOK,
      };
    }
    case SET_MSG_LOGIN_ERROR: {
      const { msgLoginError } = payload;
      return {
        ...state,
        msgLoginError,
      };
    }
    case ADD_LOGIN: {
      const { userName, email, password } = payload;
      return {
        ...state,
        userName,
        email,
        password,
      };
    }
    case SET_LOG_OUT: {
      const {
        logIn, signUp, msgLogin, userName, email, password,
      } = USER;
      return {
        ...state,
        logIn,
        signUp,
        msgLogin,
        userName,
        email,
        password,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
