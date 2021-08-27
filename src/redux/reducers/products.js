import {
  ADD_PRODUCT, SET_FAVORITE, ADD_CART, ADD_TOTAL_CART, ADD_FILTERED_PROD,
} from '../actions';

export const PRODUCTS = {
  products: [],
  filteredProd: [],
  favorited: [],
};

const productsReducer = (state = PRODUCTS, { type, payload }) => { // Desestruturação do Action
  switch (type) {
    case ADD_PRODUCT: {
      const { products } = payload;
      return {
        ...state,
        products,
      };
    }
    case ADD_FILTERED_PROD: {
      const { filteredProd } = payload;
      return {
        ...state,
        filteredProd,
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
