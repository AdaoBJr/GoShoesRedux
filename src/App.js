import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Home from './common/pages/Home';
import Login from './common/pages/Login';
import Profile from './common/pages/Profile';
import Favorited from './common/pages/Favorited';
import Details from './common/pages/Details';
import Cart from './common/pages/Cart';
import CreditCard from './common/pages/CreditCard';
import Purchased from './common/pages/Purchased';

function App() {
  const { screen: { lightTheme } } = useSelector((state) => state);

  /*= =================== DARK LIGHT THEME ==================== */
  useEffect(() => {
    if (!lightTheme) document.body.classList.add('darkTheme');
    if (lightTheme) document.body.classList.remove('darkTheme');
  });

  // ----------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  // useEffect(findLocation, [pathname]);
  // useEffect(() => { setCart(addCart(getStorage('LScart'))); }, []);
  // useEffect(() => { setCart(addTotalCart(getStorage('LScartSum'))); }, []);
  // useEffect(() => { setProducts(setFav(getStorage('LSfav'))); }, []);

  // ----------------------------------------------------------------------------------------------

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
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
