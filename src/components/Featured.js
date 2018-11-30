import React from 'react';

import Countdown from './Countdown';
import FeaturedSlider from './FeaturedSlider';

const Featured = () => {
  return (
    <div className="featured">
      <FeaturedSlider />
      <div className="featured__artist">
        <div className="featured__artist-name">Arctic Monkeys</div>
      </div>
      <Countdown />
    </div>
  );
};

export default Featured;
