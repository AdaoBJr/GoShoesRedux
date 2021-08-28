import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import { BiCreditCardAlt } from 'react-icons/bi';
import { FaCalendarCheck, FaCreditCard, FaUserTie } from 'react-icons/fa';
import { addDataCard } from '../../redux/actions';

export default function CreditCard() {
  const dispacth = useDispatch();

  const { cart: { dataCard } } = useSelector((state) => state);

  const {
    name, number, expiry, cvc, focus,
  } = dataCard;

  return (
    <>
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />

      <form className="checkoutForms">
        <div className="checkoutBox">
          <BiCreditCardAlt className="checkoutIcon" />
          <input
            type="text"
            name="number"
            val={number}
            autoComplete="off"
            required
            className="checkoutInput"
            placeholder="Número do cartão"
            onChange={(e) => dispacth(addDataCard(e, false))}
            onFocus={(e) => dispacth(addDataCard(e, true))}
          />
        </div>

        <div className="checkoutBox">
          <FaUserTie className="checkoutIcon" />
          <input
            type="text"
            name="name"
            val={name}
            autoComplete="off"
            required
            className="checkoutInput"
            placeholder="Nome do titular"
            onChange={(e) => dispacth(addDataCard(e, false))}
            onFocus={(e) => dispacth(addDataCard(e, true))}
          />
        </div>

        <div className="checkoutBox">
          <FaCalendarCheck className="checkoutIcon" />
          <input
            type="text"
            name="expiry"
            val={expiry}
            autoComplete="off"
            required
            className="checkoutInput"
            placeholder="Validade"
            onChange={(e) => dispacth(addDataCard(e, false))}
            onFocus={(e) => dispacth(addDataCard(e, true))}
          />
        </div>

        <div className="checkoutBox">
          <FaCreditCard className="checkoutIcon" />
          <input
            type="text"
            name="cvc"
            val={cvc}
            autoComplete="off"
            required
            className="checkoutInput"
            placeholder="CVC"
            onChange={(e) => dispacth(addDataCard(e, false))}
            onFocus={(e) => dispacth(addDataCard(e, true))}
          />
        </div>
      </form>
    </>
  );
}
