import React, { Component } from 'react';
import Slider from 'react-slick';

class FeaturedSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500
    };

    return (
      <div className="featured-slider">
        <Slider {...settings}>
          <div>
            <div className="featured-slider__image featured-slider__image--1" />
          </div>
          <div>
            <div className="featured-slider__image featured-slider__image--2" />
          </div>
          <div>
            <div className="featured-slider__image featured-slider__image--3" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default FeaturedSlider;
