import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ALink from 'react-anchor-link-smooth-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  FaHeart, FaRegHeart, FaMinus, FaPlus, FaShoppingCart,
} from 'react-icons/fa';
import { BiUpArrowAlt } from 'react-icons/bi';
import { addCart, setFav } from '../../redux/actions';
import { CarT, Fav, showQty } from '../../functions';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Favorited() {
  const dispatch = useDispatch();
  const [ScrollY, setScrollY] = useState(false);
  const {
    products: { favorited },
    cart: { cart },
  } = useSelector((state) => state);

  /*= =================== SHOW SCROLL TOP ==================== */
  const scrollTop = () => {
    if (window.scrollY >= 560) { setScrollY(true); } else { setScrollY(false); }
  };
  window.addEventListener('scroll', scrollTop);

  // ---------------------------------------------------------------------------------------------

  // ---------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(() => { Aos.init({ duration: 2000 }); }, []);

  // ---------------------------------------------------------------------------------------------

  const renderProducts = () => (
    <section className="section bdContainer" id="fav">
      {/* <!--========== SCROLL TOP ==========--> */}
      <ALink href="#fav" className={(ScrollY) ? 'scrolltop showScroll' : 'scrolltop'}>
        <BiUpArrowAlt className="scrolltopIcon" />
      </ALink>

      <h2 data-aos="fade-down" className="sectionTitle">
        Favoritos
      </h2>

      <div className="favContainer bdGrid">
        {favorited.map((product, index) => {
          const {
            id, title, thumbnail, availableQuantity, price,
          } = product;
          const Qty = showQty(id, cart);

          return (
            <div data-aos="fade-down" data-aos-delay={200 + index * 300} className="favContent" key={id}>
              <img src={thumbnail} alt="" className="favImg" />
              <h3 className="favTitle">{title}</h3>
              <span className="favCategory">
                {(availableQuantity) === 1 ? `${availableQuantity} disponível` : (
                  `${availableQuantity} disponíveis`)}
              </span>
              <span className="favPreci">
                {`R$ ${price
                  .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
              </span>
              <div className="addRemoveButtons">
                <div
                  aria-hidden
                  className={(Qty > 0) ? 'removeButton' : 'opacity'}
                  onClick={() => dispatch(addCart(CarT(product, cart, false)))}
                >
                  <FaMinus />
                </div>
                <div
                  aria-hidden
                  className={(Qty === 0) ? 'cartItems' : 'cartItemsN1'}
                  onClick={() => dispatch(addCart(CarT(product, cart, true)))}
                >
                  <FaShoppingCart />
                  <div className="numberItems">{ Qty }</div>
                </div>
                <div
                  aria-hidden
                  className={(Qty > 0) ? 'addButton' : 'opacity'}
                  onClick={() => dispatch(addCart(CarT(product, cart, true)))}
                >
                  <FaPlus />
                </div>
              </div>
              <div
                aria-hidden
                className="button favoritedButton"
                onClick={() => dispatch(setFav(Fav(product, favorited)))}
              >
                {(favorited.find((fav) => fav.id === id)) ? <FaHeart /> : <FaRegHeart /> }
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
  if (!favorited.length) {
    return (
      <>
        <Header />
        <h1 className="sectionTitle">Não temos itens favoritos</h1>
        <Footer />
      </>
    );
  }
  return (
    <>
      {/* <!--========== FAVORITOS ==========--> */}
      <Header />
      {renderProducts()}
      <Footer />
    </>
  );
}
