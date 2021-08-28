import React from 'react';
import Lottie from 'react-lottie';

import * as FilterMenuDashboard from '../../../filterMenu.json';

const FilterDashboard = {
  loop: true,
  autoplay: true,
  animationData: FilterMenuDashboard.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function FilterMenuDash() {
  return (
    <div className="filterMenuDash">
      <Lottie
        options={FilterDashboard}
      />
    </div>
  );
}
