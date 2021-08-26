// HELPERS ---------------------------------------------------------------------------------

// SET / GET LOCALSTORAGE
export const setStorage = (key, value) => (
  localStorage.setItem(key, JSON.stringify(value)));

export const getStorage = (key, value = []) => (
  JSON.parse(localStorage.getItem(key)) || value);

// FUNÇÃO DE REMOÇÃO
export const removeItem = (id, arrayData) => {
  const removedItem = arrayData.filter((item) => item.id !== id);
  setStorage('LScart', removedItem);
  return removedItem;
};

// ----------------------------------------------------------------------------------------------
// SET FAVORITOS

export const Fav = (product, favorited) => {
  const {
    id, title, thumbnail, price, available_quantity: availableQuantity,
  } = product;
  const favorite = [...favorited];

  const findFav = favorite.find((item) => item.id === id);
  if (!favorite.length || !findFav) {
    const newFav = [...favorite, {
      id, title, thumbnail, price, availableQuantity,
    }];
    setStorage('LSfav', newFav);
    return newFav;
  }
  // const newFav = favorited.filter((fav) => fav.id !== id);
  const newFav = removeItem(id, favorited);
  setStorage('LSfav', newFav);
  return newFav;
};

// ----------------------------------------------------------------------------------------------
// LOGIN

export const AddToUsers = (register, users) => {
  const { RuserName: userName, Remail: email, Rpassword: password } = register;
  const Users = [...users];

  const findUser = Users.find((item) => item.email === email);
  if (!Users.length || !findUser) {
    const newUsers = [...users, {
      userName, email, password,
    }];
    setStorage('LSusers', newUsers);
    return newUsers;
  }
  const key = Users.indexOf(findUser);

  Users[key].email = email;
  Users[key].password = password;

  setStorage('LSusers', Users);
  return Users;
};

// ----------------------------------------------------------------------------------------------
// CARRINHO DE COMPRAS

// ADD, REMOVE, UPDATE CART
export const CarT = (product, cart, add) => {
  const {
    id, title, thumbnail, price, available_quantity: availableQuantity,
  } = product;
  const findProduct = cart.find((item) => item.id === product.id);
  if (!cart.length || !findProduct) {
    const productCart = [...cart, {
      id, title, thumbnail, price, availableQuantity, count: 1, totalValue: price,
    }];
    setStorage('LScart', productCart);
    return productCart;
  }
  let productCart = [...cart];
  const key = productCart.indexOf(findProduct);

  if (add) { productCart[key].count += 1; }
  if (!add && productCart[key].count >= 1) { productCart[key].count -= 1; }

  productCart[key].totalValue = Math.round((productCart[key].count
      * productCart[key].price) * 100) / 100;

  if (!add && productCart[key].count === 0) { productCart = removeItem(id, cart); }

  setStorage('LScart', productCart);
  return productCart;
};

// TOTAL VALUE CART
export const sumCart = (cart) => {
  const total = cart.reduce((acc, currCart) => acc + currCart.totalValue, 0);
  const totalCarT = Math.round((total) * 100) / 100;
  setStorage('LScartSum', totalCarT);
  return totalCarT;
};

// ----------------------------------------------------------------------------------------------
// VIEW QUANTIDADE DE PRODUTOS EM ESTOQUE
export const showQty = (id, cart) => {
  if (id) {
    const product = cart.filter((c) => c.id === id)[0];
    const qty = (product) ? product.count : 0;
    return qty;
  }
  const qty = cart.reduce((acc, currValue) => acc + currValue.count, 0);
  return qty;
};
