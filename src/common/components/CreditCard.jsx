import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import { BiCreditCardAlt } from 'react-icons/bi';
import { FaCalendarCheck, FaCreditCard, FaUserTie } from 'react-icons/fa';

const InitialdataCard = {
  name: '',
  number: '',
  expiry: '',
  cvc: '',
  focus: '',
};

export default function CreditCard() {
  const [dataCard, setDataCard] = useState(InitialdataCard);

  const {
    name, number, expiry, cvc, focus,
  } = dataCard;

  const handleChange = ({ target: { name: Name, value } }, Focus) => {
    if (Focus) { setDataCard({ ...dataCard, focus: Name }); }
    if (!Focus) { setDataCard({ ...dataCard, [Name]: value }); }
  };

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
            className="checkoutInput"
            placeholder="Número do cartão"
            onChange={(e) => setDataCard({ ...dataCard, [e.target.name]: e.target.value })}
            onFocus={(e) => setDataCard({ ...dataCard, focus: e.target.name })}
          />
        </div>

        <div className="checkoutBox">
          <FaUserTie className="checkoutIcon" />
          <input
            type="text"
            name="name"
            val={name}
            autoComplete="off"
            className="checkoutInput"
            placeholder="Nome do titular"
            onChange={handleChange}
            onFocus={(e) => handleChange(e, true)}
          />
        </div>

        <div className="checkoutBox">
          <FaCalendarCheck className="checkoutIcon" />
          <input
            type="text"
            name="expiry"
            val={expiry}
            autoComplete="off"
            className="checkoutInput"
            placeholder="Validade"
            onChange={handleChange}
            onFocus={(e) => handleChange(e, true)}
          />
        </div>

        <div className="checkoutBox">
          <FaCreditCard className="checkoutIcon" />
          <input
            type="text"
            name="cvc"
            val={cvc}
            autoComplete="off"
            className="checkoutInput"
            placeholder="CVC"
            onChange={handleChange}
            onFocus={(e) => handleChange(e, true)}
          />
        </div>
      </form>
    </>
  );
}
