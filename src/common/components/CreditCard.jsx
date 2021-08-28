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

      <div className="loginForms">
        <form>
          <div className="loginBox">
            <BiCreditCardAlt className="loginIcon" />
            <input
              type="tel"
              name="number"
              val={number}
              autoComplete="off"
              className="loginInput"
              placeholder="Insira o número do cartão"
              onChange={(e) => setDataCard({ ...dataCard, [e.target.name]: e.target.value })}
              onFocus={(e) => setDataCard({ ...dataCard, focus: e.target.name })}
            />
          </div>

          <div className="loginBox">
            <FaUserTie className="loginIcon" />
            <input
              type="text"
              name="name"
              val={name}
              autoComplete="off"
              className="loginInput"
              placeholder="Insira o nome do titular do cartão"
              onChange={handleChange}
              onFocus={(e) => handleChange(e, true)}
            />
          </div>

          <div className="loginBox">
            <FaCalendarCheck className="loginIcon" />
            <input
              type="text"
              name="expiry"
              val={expiry}
              autoComplete="off"
              className="loginInput"
              placeholder="Insira a validade do cartão"
              onChange={handleChange}
              onFocus={(e) => handleChange(e, true)}
            />
          </div>

          <div className="loginBox">
            <FaCreditCard className="loginIcon" />
            <input
              type="text"
              name="cvc"
              val={cvc}
              autoComplete="off"
              className="loginInput"
              placeholder="Insira o Cvc do cartão"
              onChange={handleChange}
              onFocus={(e) => handleChange(e, true)}
            />
          </div>
        </form>
      </div>
    </>
  );
}
