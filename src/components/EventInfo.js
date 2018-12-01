import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Zoom from 'react-reveal/Zoom';

const EventInfo = () => {
  return (
    <div className="event-info">
      <Zoom duration={400}>
        <Card raised="true">
          <CardHeader
            title="Arctic Monkeys"
            subheader="with Mini Mansions and The Lemon Twigs"
          />
          <CardContent>
            <div>Friday Nov, 8, 2019 @ 8:00PM</div>
            <div>All ages. 21+ to drink.</div>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Zoom>

      <Zoom duration={400} delay={400}>
        <Card raised="true">
          <CardHeader title="The Canal Club" subheader="Richmond, Virginia" />
          <CardContent>
            <div>1545 East Cary Street Richmond, VA 23219</div>
            <div>Phone: 804-643-2582</div>
            <div>Email: Info@TheCanalClub.com</div>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Menu
            </Button>
            <Button size="small" color="primary">
              FAQ
            </Button>
          </CardActions>
        </Card>
      </Zoom>

      <Zoom duration={400} delay={800}>
        <Card raised="false">
          <CardHeader title="Tickets" subheader="Powered by TicketFly" />
          <CardContent>
            <div>Available online through TicketFly. Click the link below.</div>
            <div>
              Tickets available for purchase at the event may be limited.
            </div>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Get Tickets
            </Button>
          </CardActions>
        </Card>
      </Zoom>
    </div>
  );
};

export default EventInfo;
