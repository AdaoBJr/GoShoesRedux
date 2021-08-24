import React, { useContext, useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  FaHeart, FaRegHeart, FaMinus, FaPlus, FaShoppingCart,
} from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import store, { addCart, addProducts, setFav } from '../../context/store';
import { Fav, CarT, showQty } from '../../functions';
import { CALÇADOS, fetchAPI } from '../../services';

export default function Shoes() {
  const initialPage = {
    qtyPgs: 1, numPgs: [], atualPg: 1, qtyPgsFloor: 1, initialPg: 0, limitPg: 6, cardsLimit: 6,
  };
  const [pages, setPages] = useState(initialPage);

  const {
    products: { products, favorited }, cart: { cart }, setProducts, setCart,
  } = useContext(store);

  const threeWordsTitle = (title) => {
    const newName = `${title.split(' ')[0]} ${title.split(' ')[1]} ${title.split(' ')[2]}`;
    return newName;
  };

  const qtyPages = (productS) => {
    const { cardsLimit, numPgs } = pages;
    const qtyPgsFull = productS.length / cardsLimit;
    const qtyPgsFloor = Math.floor(qtyPgsFull);
    const qtyPgs = Math.ceil(qtyPgsFull);

    for (let i = 1; i <= qtyPgs; i += 1) { numPgs.push(i); }

    setPages({ ...pages, qtyPgs, qtyPgsFloor });
  };

  const nextSlide = () => {
    const { limitPg, cardsLimit, atualPg } = pages;

    if (limitPg >= products.length - 1) {
      setPages({
        ...pages, initialPg: 0, limitPg: 6, atualPg: 1,
      });
    } else {
      setPages((prevState) => ({
        ...pages,
        initialPg: prevState.initialPg + cardsLimit,
        limitPg: prevState.limitPg + cardsLimit,
        atualPg: atualPg + 1,
      }));
    }
  };

  const prevSlide = () => {
    const {
      initialPg, cardsLimit, qtyPgsFloor, qtyPgs, atualPg,
    } = pages;

    if (initialPg === 0) {
      setPages({
        ...pages,
        initialPg: cardsLimit * qtyPgsFloor,
        limitPg: cardsLimit * (qtyPgsFloor) + cardsLimit,
        atualPg: qtyPgs,
      });
    } else {
      setPages((prevState) => ({
        ...pages,
        initialPg: prevState.initialPg - cardsLimit,
        limitPg: prevState.limitPg - cardsLimit,
        atualPg: atualPg - 1,
      }));
    }
  };

  const selectedPage = (numPg) => {
    const { cardsLimit } = pages;

    setPages({
      ...pages,
      initialPg: (numPg - 1) * cardsLimit,
      limitPg: numPg * cardsLimit,
      atualPg: numPg,
    });
  };

  const renderProducts = (Products) => {
    const {
      initialPg, limitPg, numPgs, atualPg,
    } = pages;

    const screenProducts = Products.slice(initialPg, limitPg);
    return (
      <section className="shoes section bdContainer" id="shoes">
        <h2 data-aos="fade-down" className="sectionTitle">
          Calçados e Acessórios
        </h2>

        <h2 data-aos="fade-down" className="collectionTitle">
          Novas Coleções
        </h2>
        <div className="shoesContainer bdGrid">
          {screenProducts.map((product, index) => {
            const {
              id, title, thumbnail, available_quantity: availableQty, price,
            } = product;
            const Qty = showQty(id, cart);

            return (
              <div data-aos="fade-down" data-aos-delay={200 + index * 300} className="shoesContent" key={id}>
                <img src={thumbnail} alt="" className="shoesImg" />
                <h3 className="shoesTitle">{threeWordsTitle(title)}</h3>
                <span className="shoesCategory">
                  {(availableQty) === 1 ? `${availableQty} disponível` : (
                    `${availableQty} disponíveis`)}
                </span>
                <span className="shoesPreci">
                  {`R$ ${price
                    .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
                </span>
                <div className="addRemoveButtons">
                  <div
                    aria-hidden
                    className={(Qty > 0) ? 'removeButton' : 'opacity'}
                    onClick={() => setCart(addCart(CarT(product, cart, false)))}
                  >
                    <FaMinus />
                  </div>
                  <div
                    aria-hidden
                    className={(Qty === 0) ? 'cartItems' : 'cartItemsN1'}
                    onClick={() => setCart(addCart(CarT(product, cart, true)))}
                  >
                    <FaShoppingCart />
                    <div className="numberItems">{ Qty }</div>
                  </div>
                  <div
                    aria-hidden
                    className={(Qty > 0) ? 'addButton' : 'opacity'}
                    onClick={() => setCart(addCart(CarT(product, cart, true)))}
                  >
                    <FaPlus />
                  </div>
                </div>
                <div
                  aria-hidden
                  className="button favoritedButton"
                  onClick={() => setProducts(setFav(Fav(product, favorited)))}
                >
                  {(favorited.find((fav) => fav.id === id)) ? <FaHeart /> : <FaRegHeart /> }
                </div>
              </div>
            );
          })}
        </div>
        <ul className="pageContent">
          <li><MdKeyboardArrowLeft onClick={prevSlide} className="arrowPage brLeft" /></li>
          {numPgs.map((num) => (
            <li
              aria-hidden
              key={num}
              onClick={() => selectedPage(num)}
              className={(num === atualPg) ? 'numPage atualPg' : 'numPage'}
            >
              {num}
            </li>
          )) }
          <li><MdKeyboardArrowRight onClick={nextSlide} className="arrowPage brRight" /></li>
        </ul>
      </section>
    );
  };

  const getProducts = async () => {
    const response = await fetchAPI(CALÇADOS);
    const allProducts = response.results;
    qtyPages(allProducts);
    setProducts(addProducts(response.results, allProducts));
  };

  // ----------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(getProducts, []);
  useEffect(() => { Aos.init({ duration: 2000 }); }, []);

  // ----------------------------------------------------------------------------------------------

  return (
    renderProducts(products)
  );
}
