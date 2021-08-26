import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';

import * as GoLoginDashboard from '../../GoLoginDash.json';
import * as GoLogoutDashboard from '../../GoLogoutDash.json';

const LoginDashboard = {
  loop: true,
  autoplay: true,
  animationData: GoLoginDashboard.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const LogoutDashboard = {
  loop: true,
  autoplay: true,
  animationData: GoLogoutDashboard.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function GoLoginDash({ logout }) {
  if (logout) {
    return (
      <div className="goLoginDashboard">
        <Lottie
          options={LogoutDashboard}
        />
      </div>
    );
  }
  return (
    <div className="goLoginDashboard">
      <Lottie
        options={LoginDashboard}
      />
    </div>
  );
}

GoLoginDash.propTypes = {
  logout: PropTypes.bool,
};

GoLoginDash.defaultProps = {
  logout: undefined,
};
