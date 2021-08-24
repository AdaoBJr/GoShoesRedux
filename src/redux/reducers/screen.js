import {
  SET_SCREEN_HOME, SET_SCREEN_FAV, SET_SCREEN_CART, SET_SCREEN_PROFILE,
  SET_SCREEN_LOGIN, SET_FETCHON_DONE, SET_DONE_LOADING, SET_THEME,
} from '../actions';

export const SCREEN = {
  fetchOn: true,
  loading: undefined,
  done: undefined,
  home: true,
  fav: false,
  carT: false,
  profile: false,
  login: false,
  lightTheme: true,
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
        profile: false,
        login: false,
      };
    }
    case SET_SCREEN_FAV: {
      return {
        ...state,
        home: false,
        colec: false,
        fav: true,
        carT: false,
        profile: false,
        login: false,
      };
    }
    case SET_SCREEN_CART: {
      return {
        ...state,
        home: false,
        colec: false,
        fav: false,
        carT: true,
        profile: false,
        login: false,
      };
    }
    case SET_SCREEN_PROFILE: {
      return {
        ...state,
        home: false,
        colec: false,
        fav: false,
        carT: false,
        profile: true,
        login: false,
      };
    }
    case SET_SCREEN_LOGIN: {
      return {
        ...state,
        home: false,
        colec: false,
        fav: false,
        carT: false,
        profile: false,
        login: true,
      };
    }
    case SET_THEME: {
      return {
        ...state,
        lightTheme: !state.lightTheme,
      };
    }
    default:
      return state;
  }
};

export default screenReducer;
