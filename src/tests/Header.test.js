import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
// import { screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import Header from '../common/components/Header';

import renderWithRouter from '../services/renderWithRouter';

const initialState = {
  screen: {
    home: true,
    fav: false,
    carT: false,
    profile: false,
    lightTheme: true,
  },
  cart: { cart: [] },
  user: { logIn: false },
};

describe('Testando toda a aplicação do Componente Header', () => {
  const mockStore = configureStore();
  let store;

  it('Verifica se o título aparece no Header', () => {
    store = mockStore(initialState);
    const { getByText } = renderWithRouter(<Provider store={store}><Header /></Provider>);

    const title = getByText(/GoShoes/i);
    expect(title).toBeInTheDocument();
  });

  it('Verifica se os links aparecem no Header', () => {
    store = mockStore(initialState);
    const { getByText } = renderWithRouter(<Provider store={store}><Header /></Provider>);

    const Home = getByText(/Home/i);
    const Collections = getByText(/Coleções/i);
    const Favorited = getByText(/Favoritos/i);
    const Cart = getByText(/Carrinho/i);
    const Profile = getByText(/Perfil/i);
    expect(Home).toBeInTheDocument();
    expect(Collections).toBeInTheDocument();
    expect(Favorited).toBeInTheDocument();
    expect(Cart).toBeInTheDocument();
    expect(Profile).toBeInTheDocument();
  });
});
