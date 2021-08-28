import React from 'react';
import Lottie from 'react-lottie';

import * as dashboardPayLottie from '../../../dashboardPay.json';

const dashboardPayAnimation = {
  loop: true,
  autoplay: true,
  animationData: dashboardPayLottie.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function DashboardPay() {
  return (
    <div className="checkoutDashboard">
      <Lottie
        options={dashboardPayAnimation}
      />
    </div>
  );
}
