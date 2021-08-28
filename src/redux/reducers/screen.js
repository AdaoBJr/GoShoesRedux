import { setShip } from '../../functions';
import {
  SET_SCREEN_HOME, SET_SCREEN_FAV, SET_SCREEN_CART, SET_SCREEN_PROFILE,
  SET_SCREEN_DETAILS, SET_FETCHON_DONE, SET_DONE_LOADING, SET_THEME,
  OPEN_FILTER_MENU, HIGH_FILTER, LOW_FILTER, SHIP_FILTER,
} from '../actions';

export const SCREEN = {
  fetchOn: null,
  loading: undefined,
  done: undefined,
  home: true,
  fav: false,
  carT: false,
  profile: false,
  details: false,
  lightTheme: true,
  openFilter: false,
  filterOn: false,
  highFilter: false,
  lowFilter: false,
  shipFilter: false,
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
        details: false,
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
        details: false,
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
        details: false,
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
        details: false,
      };
    }
    case SET_SCREEN_DETAILS: {
      return {
        ...state,
        home: false,
        colec: false,
        fav: false,
        carT: false,
        profile: false,
        details: true,
      };
    }
    case SET_THEME: {
      return {
        ...state,
        lightTheme: !state.lightTheme,
      };
    }
    case OPEN_FILTER_MENU: {
      return {
        ...state,
        openFilter: !state.openFilter,
      };
    }
    case HIGH_FILTER: {
      const { filterOn } = payload;
      return {
        ...state,
        filterOn,
        highFilter: !state.highFilter,
        lowFilter: false,
      };
    }
    case LOW_FILTER: {
      const { filterOn } = payload;
      return {
        ...state,
        filterOn,
        lowFilter: !state.lowFilter,
        highFilter: false,
      };
    }
    case SHIP_FILTER: {
      const { filterOn, shipFilter } = setShip(state, payload.filterOn);
      return {
        ...state,
        filterOn,
        shipFilter,
      };
    }
    default:
      return state;
  }
};

export default screenReducer;
