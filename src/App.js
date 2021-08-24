import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  // CICLOS DE VIDA
  useEffect(() => { dispatch(getProducts()); }, []);

  // ---------------------------------------------------------------------------------------------

  return (
    <div>
      Iniciando
    </div>
  );
}

export default App;
