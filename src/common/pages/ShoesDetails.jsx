import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { FaHome } from 'react-icons/fa';
import { threeWordsTitle } from '../../functions';

export default function ShoesDetails() {
  const { state: { product } } = useLocation();
  const { title, thumbnail, attributes } = product;

  const renderRecipe = () => (
    <div data-aos="fade-up" className="recipeDetails">
      {/* -------------------------------------------------------------------------- */}
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
            <h1>
              { threeWordsTitle(title) }
            </h1>
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
            data-testid="recipe-photo"
            src={thumbnail}
            alt="product-img"
            className="recipeImage"
          />
        </div>
      </div>
      {/* -------------------------------------------------------------------------- */}
      {/* <div data-aos="zoom-out-down" className="box bottomDetails">
        <Link to="/">
          <button
            type="button"
            className="btnFinish"
          >
            Home
          </button>
        </Link>
        <Link to="/cart">
          <button
            type="button"
            className="btnFinish"
          >
            Carrinho de Compras
          </button>
        </Link>
      </div> */}
      {/* -------------------------------------------------------------------------- */}
    </div>
  );

  // ---------------------------------------------------------------------------------------------
  // CICLOS DE VIDA

  useEffect(() => { Aos.init({ duration: 2000 }); }, []);

  // ---------------------------------------------------------------------------------------------

  return (
    renderRecipe()
  );
}
