import getAPI from '../../services';

// LOGIN ------------------------------------------------------------------------------------------
export const ADD_LOGIN = 'ADD_LOGIN'; // ACTION -> ADD_LOGIN
export const addLogin = (userName, email, password) => ({ // ACTION-CREATOR -> addLogin
  type: ADD_LOGIN, payload: { userName, email, password },
});

export const SET_SIGN_UP = 'SET_SIGN_UP'; // ACTION -> SET_SIGN_UP
export const setSignUp = () => ({ // ACTION-CREATOR -> setSignUp
  type: SET_SIGN_UP,
});

export const SET_MSG_LOGIN = 'SET_MSG_LOGIN'; // ACTION -> SET_MSG_LOGIN
export const setMsgLogin = (msgLogin) => ({ // ACTION-CREATOR -> setMsgLogin
  type: SET_MSG_LOGIN, payload: { msgLogin },
});

export const SET_MSG_LOGIN_OK = 'SET_MSG_LOGIN_OK'; // ACTION -> SET_MSG_LOGIN_OK
export const setMsgLogInOK = (logIn, msgLoginOK) => ({ // ACTION-CREATOR -> setMsgLogInOK
  type: SET_MSG_LOGIN_OK, payload: { logIn, msgLoginOK },
});

export const SET_MSG_LOGIN_ERROR = 'SET_MSG_LOGIN_ERROR'; // ACTION -> SET_MSG_LOGIN_ERROR
export const setMsgLoginError = (msgLoginError) => ({ // ACTION-CREATOR -> setMsgLoginError
  type: SET_MSG_LOGIN_ERROR, payload: { msgLoginError },
});

export const SET_LOG_IN = 'SET_LOG_IN'; // ACTION -> SET_LOG_IN
export const setLogIn = (logIn) => ({ // ACTION-CREATOR -> setLogIn
  type: SET_LOG_IN, payload: { logIn },
});

export const SET_LOG_OUT = 'SET_LOG_OUT'; // ACTION -> SET_LOG_OUT
export const setLogOut = () => ({ // ACTION-CREATOR -> setLogOut
  type: SET_LOG_OUT,
});

// PRODUCTS ---------------------------------------------------------------------------------------

export const ADD_PRODUCT = 'ADD_PRODUCT'; // ACTION -> ADD_PRODUCT
export const addProduct = (products) => ({ // ACTION-CREATOR -> addProduct
  type: ADD_PRODUCT, payload: { products },
});

// Fetch Thunk

// Thunk com Async / Await
export function getProducts() {
  return async (dispatch) => {
    const products = await getAPI();
    try {
      return dispatch(addProduct(products.results));
    } catch (error) {
      return dispatch(addProduct(error.message));
    }
  };
}

// Thunk com Then
// export const getProducts = () => (dispatch) => {
//   getAPI()
//     .then((products) => dispatch(
//       addProduct(products.results),
//     ));
// };

export const SET_FAVORITE = 'SET_FAVORITE'; // ACTION -> SET_FAVORITE
export const setFav = (favorited) => ({ // ACTION-CREATOR -> SET_FAVORITE
  type: SET_FAVORITE, payload: { favorited },
});

// CART ---------------------------------------------------------------------------------------

export const ADD_CART = 'ADD_CART'; // ACTION -> ADD_PRODUCTS
export const addCart = (cart) => ({ // ACTION-CREATOR -> ADD_PRODUCTS
  type: ADD_CART, payload: { cart },
});

export const ADD_TOTAL_CART = 'ADD_TOTAL_CART'; // ACTION -> ADD_TOTAL_CART
export const addTotalCart = (totalCart) => ({ // ACTION-CREATOR -> ADD_TOTAL_CART
  type: ADD_TOTAL_CART, payload: { totalCart },
});

// SCREEN ---------------------------------------------------------------------------------------

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
export const SET_SCREEN_PROFILE = 'SET_SCREEN_PROFILE'; // ACTION -> SET_SCREEN_PROFILE
export const SET_SCREEN_LOGIN = 'SET_SCREEN_LOGIN'; // ACTION -> SET_SCREEN_LOGIN
export const SET_THEME = 'SET_THEME'; // ACTION -> SET_THEME

// -------------------------------------------------------------------------------------------------
