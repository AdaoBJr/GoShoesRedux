import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import CartFooter from '../common/components/CartFooter';

import renderWithRouter from '../services/renderWithRouter';

const initialState = {
  cart: { cart: [], updateSum: false, totalCart: 0 },
};

describe('Testando toda a aplicação do Componente CartFooter', () => {
  const mockStore = configureStore();
  let store;

  it('Verifica se os botões aparecem no CartFooter', () => {
    store = mockStore(initialState);
    const { getByRole } = renderWithRouter(<Provider store={store}><CartFooter /></Provider>);

    const btnClear = getByRole('button', {
      name: /Limpar Carrinho/i,
    });

    const btnCancel = getByRole('button', {
      name: /Cancelar Compra/i,
    });

    const btnPayment = getByRole('button', {
      name: /Pagamento/i,
    });

    expect(btnClear).toBeInTheDocument();
    expect(btnCancel).toBeInTheDocument();
    expect(btnPayment).toBeInTheDocument();
  });
});
