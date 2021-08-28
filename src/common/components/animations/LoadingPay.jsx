import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

import * as loadingPayLottie from '../../../loadingPay.json';
import * as donePayLottie from '../../../donePay.json';

const loadingPayAnimation = {
  loop: true,
  autoplay: true,
  animationData: loadingPayLottie.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const donePayAnimation = {
  loop: false,
  autoplay: true,
  animationData: donePayLottie.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function LoadingPay({ loading }) {
  return (
    <div className="bgLoading">
      {!loading ? (
        <Lottie
          options={loadingPayAnimation}
          height={420}
          width={420}
        />
      ) : (
        <Lottie
          options={donePayAnimation}
          height={220}
          width={220}
        />
      )}
    </div>
  );
}

LoadingPay.propTypes = {
  loading: PropTypes.bool,
};

LoadingPay.defaultProps = {
  loading: undefined,
};
