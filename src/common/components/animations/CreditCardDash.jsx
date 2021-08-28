import React from 'react';
import Lottie from 'react-lottie';

import * as CreditCardDashboard from '../../../creditCard.json';

const CreditDashboard = {
  loop: true,
  autoplay: true,
  animationData: CreditCardDashboard.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function CreditCardDash() {
  return (
    <div className="checkoutDash">
      <Lottie
        options={CreditDashboard}
      />
    </div>
  );
}
