import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

class Pricing extends Component {
  state = {
    prices: [50, 150, 450],
    tiers: ['General Admission', 'Preferred Seating', 'Meet and Greet'],
    description: [
      'Whatever seitan mumblecore dreamcatcher hoodie intelligentsia trust fund shaman godard kale chips.',
      'Kogi normcore seitan, vinyl umami echo park chicharrones unicorn literally health goth brooklyn lyft.',
      'Tacos authentic irony, snackwave lyft kombucha palo santo 8-bit. Poutine mumblecore street art.'
    ],
    linkto: [
      'http://www.ticketfly.com/',
      'http://www.ticketfly.com/',
      'http://www.ticketfly.com/'
    ],
    transitionDelay: [500, 0, 500]
  };

  renderBoxes = () =>
    this.state.prices.map((box, i) => (
      <Grid item xs={3}>
        <Zoom delay={this.state.transitionDelay[i]}>
          <Card raised={true} key={i} className="pricing__box">
            <div className="pricing__content">
              <CardContent className="pricing__title">
                ${this.state.prices[i]}
              </CardContent>
              <CardContent className="pricing__subtitle">
                <div className="pricing__subtitle-text">
                  {this.state.tiers[i]}
                </div>
              </CardContent>
              <Divider light={true} variant="middle" />
              <CardContent>
                <div className="pricing__description">
                  {this.state.description[i]}
                </div>
              </CardContent>
              <CardActions className="pricing__actions">
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  style={{ fontSize: '1.4rem' }}
                  className="pricing__button"
                >
                  Purchase Tickets
                </Button>
              </CardActions>
            </div>
          </Card>
        </Zoom>
      </Grid>
    ));

  render() {
    return (
      <div className="pricing">
        <div className="pricing__container">
          <h2 className="pricing__header">Pricing</h2>
          <Divider
            variant="middle"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
          />
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={40}
            className="pricing__box-container"
          >
            {this.renderBoxes()}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Pricing;
