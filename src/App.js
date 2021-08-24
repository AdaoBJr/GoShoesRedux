import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './redux/actions';
import { fetchAPI2 } from './services';

function App() {
  const dispatch = useDispatch();
  const getProducts = async () => {
    // const response = await fetchAPI().get('products');
    const response = await fetchAPI2();
    // const allProducts = response.products;
    const allProducts = response.results;
    dispatch(addProduct(allProducts));
  };

  // CICLOS DE VIDA
  useEffect(getProducts, []);

  // ---------------------------------------------------------------------------------------------

  return (
    <div>
      Iniciando
    </div>
  );
}

export default App;
