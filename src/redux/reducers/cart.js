import {
  ADD_CART, ADD_DATA_CARD, ADD_TOTAL_CART, SET_COMPLETE_BUY,
} from '../actions';

export const CART = {
  cart: [],
  updateSum: true,
  totalCart: 0,
  buyCompleted: null,
  dataCard: {
    name: '', number: '', expiry: '', cvc: '', focus: '',
  },
};

const cartReducer = (state = CART, { type, payload }) => { // Desestruturação do Action
  switch (type) {
    case ADD_CART: {
      const { cart } = payload;
      return {
        ...state,
        cart,
        updateSum: true,
      };
    }
    case ADD_TOTAL_CART: {
      const { totalCart } = payload;
      return {
        ...state,
        totalCart,
        updateSum: false,
      };
    }
    case SET_COMPLETE_BUY: {
      const { buyCompleted } = payload;
      return {
        ...state,
        buyCompleted,
      };
    }
    case ADD_DATA_CARD: {
      const { name, value, Focus } = payload;
      let result = {};
      if (Focus) {
        result = {
          ...state,
          dataCard: { ...state.dataCard, focus: name },
        };
      }
      if (!Focus) {
        result = {
          ...state,
          dataCard: { ...state.dataCard, [name]: value },
        };
      }
      return result;
    }
    default:
      return state;
  }
};

export default cartReducer;
