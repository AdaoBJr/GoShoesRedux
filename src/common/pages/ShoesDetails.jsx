import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { FaHome } from 'react-icons/fa';
import { threeWordsTitle } from '../../functions';
import BtnFavorited from '../components/BtnFavorited';
import BtnsAddRem from '../components/BtnsAddRem';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ShoesDetails() {
  const { state: { product } } = useLocation();
  const { title, thumbnail, attributes } = product;

  const renderRecipe = () => (
    <div data-aos="fade-up" className="recipeDetails">
      <div className="box topDetails">
        <div className="titleDetails">
          <Link
            to="/"
          >
            <button
              type="button"
              className="btnHome"
            >
              <FaHome />
            </button>
          </Link>
          <div className="titleCategory">
            <h2>
              { threeWordsTitle(title) }
            </h2>
            <div className="ingredients">
              <h3>Detalhes do Produto</h3>
              {attributes.map((attribute) => (
                <div key={attribute.name}>
                  <p>{`${attribute.name}: ${attribute.value_name}` }</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="imageButtons">
          <img
            src={thumbnail}
            alt="product-img"
            className="recipeImage"
          />
          <div className="favCartBtns">
            <BtnFavorited product={product} />
            <BtnsAddRem product={product} />
          </div>
        </div>
      </div>
    </div>
  );

  // ---------------------------------------------------------------------------------------------
  // CICLOS DE VIDA

  useEffect(() => { Aos.init({ duration: 2000 }); }, []);

  // ---------------------------------------------------------------------------------------------

  return (
    <>
      <Header />
      {renderRecipe()}
      <Footer />
    </>
  );
}
