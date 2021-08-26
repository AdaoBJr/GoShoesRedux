import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ALink from 'react-anchor-link-smooth-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {
  FaHeart, FaRegHeart, FaMinus, FaPlus, FaTimes,
} from 'react-icons/fa';
import { BiUpArrowAlt } from 'react-icons/bi';
import { addCart, setFav } from '../../redux/actions';
import {
  CarT, Fav, removeItem,
} from '../../functions';

import CartFooter from '../components/CartFooter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import GoLogin from '../components/GoLogin';

export default function Cart() {
  const dispatch = useDispatch();
  const [ScrollY, setScrollY] = useState(false);

  const {
    products: { favorited },
    cart: { cart },
    user: { logIn },
  } = useSelector((state) => state);

  /*= =================== SHOW SCROLL TOP ==================== */
  const scrollTop = () => {
    if (window.scrollY >= 560) { setScrollY(true); } else { setScrollY(false); }
  };
  window.addEventListener('scroll', scrollTop);

  // ---------------------------------------------------------------------------------------------

  const renderProducts = () => (
    <section className="section bdContainer" id="cart">
      {/* <!--========== SCROLL TOP ==========--> */}
      <ALink href="#cart" className={(ScrollY) ? 'scrolltop showScroll' : 'scrolltop'} style={{ bottom: '5rem' }}>
        <BiUpArrowAlt className="scrolltopIcon" />
      </ALink>

      <h2 data-aos="fade-down" className="sectionTitle">
        Carrinho de Compras
      </h2>

      <div className="cartContainer bdGrid">
        {cart.map((product, index) => {
          const {
            id, title, thumbnail, availableQuantity, count, totalValue,
          } = product;

          return (
            <div data-aos="fade-down" data-aos-delay={200 + index * 300} className="cartContent" key={id}>
              <div
                aria-hidden
                className="button removedButton"
                onClick={() => dispatch(addCart(removeItem(id, cart)))}
              >
                <FaTimes />
              </div>
              <img src={thumbnail} alt="" className="favImg" />
              <h3 className="cartTitle">{title}</h3>
              <span className="cartCategory">
                {(availableQuantity) === 1 ? `${availableQuantity} disponível` : (
                  `${availableQuantity} disponíveis`)}
              </span>
              <span className="cartPreci">
                {`R$ ${totalValue
                  .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
              </span>
              <div className="addRemoveBtns">
                <div
                  aria-hidden
                  className={(count > 1) ? 'removeButtonCart' : 'opacity'}
                  onClick={() => dispatch(addCart(CarT(product, cart, false)))}
                >
                  <FaMinus />
                </div>
                <div className={(count > 1) ? 'cartItemsCart' : 'cartItemsN1Cart'}>
                  <div className="numberItems cartQty">{ count }</div>
                </div>
                <div
                  aria-hidden
                  className="addButtonCart"
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

  // ---------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(() => { Aos.init({ duration: 2000 }); }, []);

  // ---------------------------------------------------------------------------------------------

  if (!logIn) {
    return (
      <GoLogin />
    );
  }
  if (!cart.length) {
    return (
      <>
        <Header />
        <h1 className="sectionTitle">Não temos itens no carrinho</h1>
        <Footer />
      </>
    );
  }
  return (
    <>
      {/* <!--========== FAVORITOS ==========--> */}
      <Header />
      {renderProducts()}
      <CartFooter />
      <Footer />
    </>
  );
}
