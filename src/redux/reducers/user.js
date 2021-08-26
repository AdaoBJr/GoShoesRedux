import {
  ADD_LOGIN, SET_LOG_IN, SET_SIGN_UP, SET_MSG_LOGIN, SET_LOG_OUT,
} from '../actions';

export const USER = {
  logIn: false,
  signUp: false,
  msgLogin: false,
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
