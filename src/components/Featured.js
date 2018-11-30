import React from 'react';

import FeaturedSlider from './FeaturedSlider';

const Featured = () => {
  return (
    <div className="featured">
      <FeaturedSlider />
      <div className="featured__artist">
        <div className="featured__artist-name">Arctic Monkeys</div>
      </div>
    </div>
  );
};

export default Featured;
