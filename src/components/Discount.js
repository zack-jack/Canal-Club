import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  incPercentage() {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.incPercentage();
    }, 30);
  }

  scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -100
    });
  };

  render() {
    return (
      <div className="discount">
        <Fade>
          <h2 className="discount__header">Get the latest album today</h2>
        </Fade>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={40}
        >
          <Grid item xs={6} className="discount__left">
            <Slide left>
              <div className="discount__image-container">
                <img
                  alt="Tranquility Base Hotel & Casino Album"
                  className="discount__image"
                />
              </div>
            </Slide>
          </Grid>

          <Grid item xs={6} className="discount__right">
            <Fade onReveal={() => this.incPercentage()}>
              <div className="discount__percentage-container">
                <div className="discount__percentage">
                  {this.state.discountStart}%
                </div>
                <div className="discount__percentage--off">off</div>
              </div>
              <div className="discount__subtitle">With ticket purchase</div>
            </Fade>

            <Fade>
              <div className="discount__content">
                <p className="discount__copy">
                  Franzen wolf disrupt pour-over yr fixie woke chambray whatever
                  salvia. Ugh direct trade artisan man bun. Migas pork belly
                  portland ennui wayfarers marfa vape man braid vegan.
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => this.scrollToElement('Pricing')}
                  style={{ fontSize: '1.2rem' }}
                  className="discount__button"
                >
                  Buy now
                </Button>
              </div>
            </Fade>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Discount;
