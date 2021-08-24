// import getCurrencies from '../api';

import fetchAPI from '../../services';

// LOGIN ------------------------------------------------------------------------------------------
export const ADD_LOGIN = 'ADD_LOGIN';

export const addLogin = (email, password) => ({
  type: ADD_LOGIN,
  payload: {
    email,
    password,
  },
});

// PRODUCTS ---------------------------------------------------------------------------------------

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const addProduct = (allProducts) => ({
  type: ADD_PRODUCT, payload: { allProducts },
});

// Fetch Thunk

// Thunk com Async / Await
// export function fetchShoes() {
//   return async (dispatch) => {
//     const listShoes = await fetchAPI();
//     try {
//       return dispatch(addProduct(listShoes.result));
//     } catch (error) {
//       return dispatch(addProduct(error.message));
//     }
//   };
// }

// Thunk com Then
export const fetchShoes = () => (dispatch) => {
  fetchAPI()
    .then((shoesListSuccess) => dispatch(
      addProduct(shoesListSuccess.result),
    ))
    .catch((error) => dispatch(addProduct(error.message)));
};

// -------------------------------------------------------------------------------------------------

export const SET_FAVORITE = 'SET_FAVORITE'; // ACTION -> SET_FAVORITE
export const setFav = (favorited) => ({ // ACTION-CREATOR -> SET_FAVORITE
  type: SET_FAVORITE, payload: { favorited },
});

export const ADD_CART = 'ADD_CART'; // ACTION -> ADD_PRODUCTS
export const addCart = (cart) => ({ // ACTION-CREATOR -> ADD_PRODUCTS
  type: ADD_CART, payload: { cart },
});

export const ADD_TOTAL_CART = 'ADD_TOTAL_CART'; // ACTION -> ADD_TOTAL_CART
export const addTotalCart = (totalCart) => ({ // ACTION-CREATOR -> ADD_TOTAL_CART
  type: ADD_TOTAL_CART, payload: { totalCart },
});

export const SET_FETCHON_DONE = 'SET_FETCHON_DONE'; // ACTION -> SET_FETCHON_DONE
export const setFetchOnDone = (fetchOn, done) => ({ // ACTION-CREATOR -> SET_FETCHON_DONE
  type: SET_FETCHON_DONE, payload: { fetchOn, done },
});

export const SET_DONE_LOADING = 'SET_DONE_LOADING'; // ACTION -> SET_DONE_LOADING
export const setDoneLoading = (done, loading) => ({ // ACTION-CREATOR -> SET_DONE_LOADING
  type: SET_DONE_LOADING, payload: { done, loading },
});

export const SET_SCREEN_HOME = 'SET_SCREEN_HOME'; // ACTION -> SET_SCREEN_HOME
export const SET_SCREEN_FAV = 'SET_SCREEN_FAV'; // ACTION -> SET_SCREEN_FAV
export const SET_SCREEN_CART = 'SET_SCREEN_CART'; // ACTION -> SET_SCREEN_CART
