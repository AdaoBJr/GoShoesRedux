import React from 'react';
import Lottie from 'react-lottie';

import * as GoLoginDashboard from '../../GoLoginDash.json';

const dashboarAnimation = {
  loop: true,
  autoplay: true,
  animationData: GoLoginDashboard.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function GoLoginDash() {
  return (
    <div className="goLoginDashboard">
      <Lottie
        options={dashboarAnimation}
      />
    </div>
  );
}
