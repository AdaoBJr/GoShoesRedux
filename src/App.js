import React from 'react';
// import { useDispatch } from 'react-redux';
// import { getProducts } from './redux/actions';
import { Switch, Route } from 'react-router-dom';

import Home from './common/pages/Home';
import Login from './common/pages/Login';
import Profile from './common/pages/Profile';
import Favorited from './common/pages/Favorited';
import Cart from './common/pages/Cart';
import CreditCard from './common/pages/CreditCard';
import Purchased from './common/pages/Purchased';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/favorited" component={Favorited} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/credit" component={CreditCard} />
      <Route exact path="/purchased" component={Purchased} />
    </Switch>
  );
}

export default App;
