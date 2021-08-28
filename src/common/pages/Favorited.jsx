import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ALink from 'react-anchor-link-smooth-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BiUpArrowAlt } from 'react-icons/bi';

import Footer from '../components/Footer';
import Header from '../components/Header';
import BtnsAddRem from '../components/buttons/BtnsAddRem';
import BtnFavorited from '../components/buttons/BtnFavorited';

export default function Favorited() {
  const [ScrollY, setScrollY] = useState(false);
  const {
    products: { favorited },
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

          return (
            <div data-aos="fade-down" data-aos-delay={200 + index * 300} className="favContent" key={id}>
              <Link
                to={{ pathname: `/details/${id}`, state: { product } }}
                className="bdGrid"
              >
                <img src={thumbnail} alt="" className="favImg" />
                <h3 className="favTitle">{title}</h3>
              </Link>
              <span className="favCategory">
                {(availableQuantity) === 1 ? `${availableQuantity} disponível` : (
                  `${availableQuantity} disponíveis`)}
              </span>
              <span className="favPreci">
                {`R$ ${price
                  .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
              </span>
              <BtnsAddRem product={product} />
              <BtnFavorited product={product} />
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
