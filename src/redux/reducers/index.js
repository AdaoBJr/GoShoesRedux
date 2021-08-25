import { combineReducers } from 'redux';
import products from './products';
import screen from './screen';
import cart from './cart';
import user from './user';

const reducers = combineReducers({
  products,
  screen,
  cart,
  user,
});

export default reducers;
