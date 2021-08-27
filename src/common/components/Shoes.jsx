import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ShoesCard from './ShoesCard';

import { getProducts, addFilteredProd } from '../../redux/actions';

export default function Shoes() {
  const dispatch = useDispatch();
  const initialPage = {
    qtyPgs: 1, numPgs: [], atualPg: 1, qtyPgsFloor: 1, initialPg: 0, limitPg: 6, cardsLimit: 6,
  };
  const [pages, setPages] = useState(initialPage);

  const {
    products: { filteredProd, products },
    screen: {
      filterOn, highFilter, lowFilter, shipFilter,
    },
  } = useSelector((state) => state);

  const filterProducts = () => {
    if (highFilter) {
      const newProducts = [...products];
      newProducts.sort((a, b) => b.price - a.price);
      dispatch(addFilteredProd(newProducts));
    }
    if (lowFilter) {
      const newProducts = [...products];
      newProducts.sort((a, b) => a.price - b.price);
      dispatch(addFilteredProd(newProducts));
    }
    if (shipFilter) {
      let prodNew = [];
      if (filteredProd.length) { prodNew = [...filteredProd]; }
      if (!filteredProd.length) { prodNew = [...products]; }

      const newProducts = prodNew.filter(({ shipping }) => shipping.free_shipping);
      dispatch(addFilteredProd(newProducts));
    }
    if (!filterOn) {
      dispatch(addFilteredProd([]));
    }
  };

  const qtyPages = () => {
    const { cardsLimit } = pages;
    const qtyPgsFull = (filteredProd.length || products.length) / cardsLimit;
    const qtyPgsFloor = Math.floor(qtyPgsFull);
    const qtyPgs = Math.ceil(qtyPgsFull);

    const numPgs = [];
    for (let i = 1; i <= qtyPgs; i += 1) { numPgs.push(i); }

    setPages({
      ...pages, qtyPgs, qtyPgsFloor, numPgs,
    });
  };

  const nextPage = () => {
    const { limitPg, cardsLimit, atualPg } = pages;

    if (limitPg >= (filteredProd.length || products.length) - 1) {
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

  const prevPage = () => {
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

  const renderProducts = (FilteredProd, Products) => {
    const {
      initialPg, limitPg, numPgs, atualPg,
    } = pages;
    let rendProducts = [];
    if (FilteredProd.length) { rendProducts = [...FilteredProd]; }
    if (!FilteredProd.length) { rendProducts = [...Products]; }

    const screenProducts = rendProducts.slice(initialPg, limitPg);
    return (
      <section className="shoes section bdContainer" id="shoes">
        <h2 data-aos="fade-down" className="sectionTitle">
          Calçados e Acessórios
        </h2>

        <h2 data-aos="fade-down" className="collectionTitle">
          Novas Coleções
        </h2>
        <div className="shoesContainer bdGrid">
          <ShoesCard screenProducts={screenProducts} />
        </div>
        <ul className="pageContent">
          <li><MdKeyboardArrowLeft onClick={prevPage} className="arrowPage brLeft" /></li>
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
          <li><MdKeyboardArrowRight onClick={nextPage} className="arrowPage brRight" /></li>
        </ul>
      </section>
    );
  };

  // ----------------------------------------------------------------------------------------------
  // CICLOS DE VIDA
  useEffect(() => { dispatch(getProducts()); }, []);
  useEffect(filterProducts, [filterOn, highFilter, lowFilter, shipFilter]);
  useEffect(qtyPages, [products, filteredProd]);
  useEffect(() => { Aos.init({ duration: 2000 }); }, []);

  // ----------------------------------------------------------------------------------------------

  if (!products?.length) { return (<></>); }
  return (
    renderProducts(filteredProd, products)
  );
}
