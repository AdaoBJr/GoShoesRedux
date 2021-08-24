import { combineReducers } from 'redux';
import products from './products';
import screen from './screen';
import cart from './cart';

const reducers = combineReducers({
  products,
  screen,
  cart,
});

export default reducers;
