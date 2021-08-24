import {
  ADD_PRODUCT, SET_FAVORITE, ADD_CART, ADD_TOTAL_CART,
} from '../actions';

export const PRODUCTS = {
  allProducts: [],
  products: [],
  favorited: [],
};

const productsReducer = (state = PRODUCTS, { type, payload }) => { // Desestruturação do Action
  switch (type) {
    case ADD_PRODUCT: {
      const { allProducts } = payload;
      return {
        ...state,
        allProducts,
      };
    }
    case SET_FAVORITE: {
      const { favorited } = payload;
      return {
        ...state,
        favorited,
      };
    }
    case ADD_CART: {
      const { cart } = payload;
      return {
        ...state,
        cart,
      };
    }
    case ADD_TOTAL_CART: {
      const { totalCart } = payload;
      return {
        ...state,
        totalCart,
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
