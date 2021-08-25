import { ADD_LOGIN, SET_LOG_IN } from '../actions';

export const USER = {
  logIn: false,
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
    case ADD_LOGIN: {
      const { userName, email, password } = payload;
      return {
        ...state,
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
