import {
  ADD_PRODUCTS, SET_FAVORITE, ADD_CART, ADD_TOTAL_CART,
} from '../store';

const productsReducer = (state, { type, payload }) => { // Desestruturação do Action
  switch (type) {
    case ADD_PRODUCTS: {
      const { allProducts, products } = payload;
      return {
        ...state,
        allProducts,
        products,
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
