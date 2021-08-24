import {
  SET_SCREEN_HOME, SET_SCREEN_FAV, SET_SCREEN_CART, SET_FETCHON_DONE, SET_DONE_LOADING,
} from '../actions';

export const SCREEN = {
  fetchOn: true,
  loading: undefined,
  done: undefined,
  home: true,
  fav: false,
  carT: false,
};

const screenReducer = (state = SCREEN, { type, payload }) => { // Desestruturação do Action
  switch (type) {
    case SET_FETCHON_DONE: {
      const { fetchOn, done } = payload;
      return {
        ...state,
        fetchOn,
        done,
      };
    }
    case SET_DONE_LOADING: {
      const { done, loading } = payload;
      return {
        ...state,
        loading,
        done,
      };
    }
    case SET_SCREEN_HOME: {
      return {
        ...state,
        home: true,
        colec: false,
        fav: false,
        carT: false,
      };
    }
    case SET_SCREEN_FAV: {
      return {
        ...state,
        home: false,
        colec: false,
        fav: true,
        carT: false,
      };
    }
    case SET_SCREEN_CART: {
      return {
        ...state,
        home: false,
        colec: false,
        fav: false,
        carT: true,
      };
    }
    default:
      return state;
  }
};

export default screenReducer;
