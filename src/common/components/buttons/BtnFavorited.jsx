import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { setFav, setMsgLogin } from '../../../redux/actions';
import { Fav } from '../../../functions';
import { TIME_SEC } from '../../pages/Profile';

export default function BtnFavorited({ product }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    products: { favorited },
    user: { logIn },
    screen: { details },
  } = useSelector((state) => state);

  const addToFav = () => {
    if (logIn) {
      dispatch(setFav(Fav(product, favorited)));
      dispatch(setMsgLogin(false));
    } else {
      dispatch(setMsgLogin(true));
      setTimeout(() => {
        history.push('/profile');
      }, TIME_SEC);
    }
  };

  const renderBtnFavorited = () => (
    <div
      aria-hidden
      className={(!details) ? (
        'button favoritedButton') : ('button favoritedButtonDetails')}
      onClick={() => addToFav()}
    >
      {(favorited.find((fav) => fav.id === product.id)) ? <FaHeart /> : <FaRegHeart /> }
    </div>
  );

  return (
    renderBtnFavorited()
  );
}
