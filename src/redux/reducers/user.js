import { ADD_LOGIN } from '../actions';

export const USER = {
  userName: '',
  email: '',
  password: '',
};

const userReducer = (state = USER, { type, payload }) => { // Desestruturação do Action
  switch (type) {
    case ADD_LOGIN: {
      const { name, value } = payload;
      return {
        ...state,
        [name]: value,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
