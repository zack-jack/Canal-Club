import React from 'react';
import Button from '@material-ui/core/Button';

import Countdown from './Countdown';
import FeaturedSlider from './FeaturedSlider';

const Featured = () => {
  return (
    <div className="featured">
      <FeaturedSlider />
      <div className="featured__container">
        <div className="featured__details">
          <div className="featured__artist">Arctic Monkeys</div>
          <div className="featured__date-time">Nov. 8th, 2019 at 8:00 PM</div>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ fontSize: '1.6rem' }}
            className="featured__button"
          >
            Get your tickets now!
          </Button>
        </div>
      </div>
      <Countdown />
    </div>
  );
};

export default Featured;
