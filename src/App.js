import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';

import Home from './common/pages/Home';
import Profile from './common/pages/Profile';
import Favorited from './common/pages/Favorited';
import Details from './common/pages/Details';
import Cart from './common/pages/Cart';
import CreditCard from './common/pages/CreditCard';
import Purchased from './common/pages/Purchased';

import {
  addCart, addLogin, addTotalCart, setFav, SET_SCREEN_CART, SET_SCREEN_FAV,
  SET_SCREEN_HOME, SET_SCREEN_PROFILE,
} from './redux/actions';

import { getStorage } from './functions';

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { screen: { lightTheme } } = useSelector((state) => state);

  /*= =================== DARK LIGHT THEME ==================== */
  useEffect(() => {
    if (!lightTheme) document.body.classList.add('darkTheme');
    if (lightTheme) document.body.classList.remove('darkTheme');
  });

  // LOCATION -------------------------------------------------------------------------------------
  const findLocation = () => {
    switch (pathname) {
      case '/':
        return dispatch({ type: SET_SCREEN_HOME });

      case '/favorited':
        return dispatch({ type: SET_SCREEN_FAV });

      case '/cart':
        return dispatch({ type: SET_SCREEN_CART });

      case '/profile':
        return dispatch({ type: SET_SCREEN_PROFILE });

      default:
        return '';
    }
  };

  // ----------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(findLocation, [pathname]);
  useEffect(() => { dispatch(addLogin(getStorage('LSusers'))); }, []);
  useEffect(() => { dispatch(addCart(getStorage('LScart'))); }, []);
  useEffect(() => { dispatch(addTotalCart(getStorage('LScartSum'))); }, []);
  useEffect(() => { dispatch(setFav(getStorage('LSfav'))); }, []);

  // ----------------------------------------------------------------------------------------------

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/favorited" component={Favorited} />
      <Route exact path="/details/:id" component={Details} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/credit" component={CreditCard} />
      <Route exact path="/purchased" component={Purchased} />
    </Switch>
  );
}

export default App;
