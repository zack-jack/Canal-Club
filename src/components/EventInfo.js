import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Zoom from 'react-reveal/Zoom';

const EventInfo = () => {
  return (
    <div className="event-info">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={40}
      >
        <Grid item xs={3}>
          <Zoom duration={400}>
            <Card raised={true} className="event-info__card">
              <CardContent className="event-info__card-header">
                <div className="event-info__card-header-title">
                  Arctic Monkeys
                </div>
                <div className="event-info__card-header-subtitle">
                  with Mini Mansions
                </div>
              </CardContent>
              <Divider variant="middle" />
              <CardContent className="event-info__card-body">
                <div className="event-info__card-body-text">
                  Friday Nov, 8, 2019 @ 8:00PM
                </div>
                <div className="event-info__card-body-text">
                  All ages. 21+ to drink.
                </div>
              </CardContent>
              <CardActions className="event-info__action">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ fontSize: '1.2rem' }}
                  className="event-info__button"
                >
                  <div className="event-info__button-text">Learn More</div>
                </Button>
              </CardActions>
            </Card>
          </Zoom>
        </Grid>

        <Grid item xs={3}>
          <Zoom duration={400} delay={400}>
            <Card raised={true} className="event-info__card">
              <CardContent className="event-info__card-header">
                <div className="event-info__card-header-title">Tickets</div>
                <div className="event-info__card-header-subtitle">
                  Powered by TicketFly
                </div>
              </CardContent>
              <Divider variant="middle" />
              <CardContent className="event-info__card-body">
                <div className="event-info__card-body-text">
                  Available for purchase through TicketFly.
                </div>
                <div className="event-info__card-body-text">
                  Click the link below for pricing.
                </div>
              </CardContent>
              <CardActions className="event-info__action">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ fontSize: '1.2rem' }}
                  className="event-info__button"
                >
                  Get Tickets
                </Button>
              </CardActions>
            </Card>
          </Zoom>
        </Grid>

        <Grid item xs={3}>
          <Zoom duration={400} delay={800}>
            <Card raised={true} className="event-info__card">
              <CardContent className="event-info__card-header">
                <div className="event-info__card-header-title">
                  The Canal Club
                </div>
                <div className="event-info__card-header-subtitle">
                  Richmond, Virginia
                </div>
              </CardContent>
              <Divider variant="middle" />
              <CardContent className="event-info__card-body">
                <div className="event-info__card-body-text">
                  1545 East Cary Street Richmond, VA 23219
                </div>
                <div className="event-info__card-body-text">
                  Phone: 804-643-2582
                </div>
                <div className="event-info__card-body-text">
                  Email: Info@TheCanalClub.com
                </div>
              </CardContent>
              <CardActions className="event-info__action">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ fontSize: '1.2rem', marginRight: '1rem' }}
                  className="event-info__button"
                >
                  FAQ
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  style={{ fontSize: '1.2rem' }}
                  className="event-info__button"
                >
                  Menu
                </Button>
              </CardActions>
            </Card>
          </Zoom>
        </Grid>
      </Grid>
    </div>
  );
};

export default EventInfo;
