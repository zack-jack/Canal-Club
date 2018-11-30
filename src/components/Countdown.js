import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends Component {
  state = {
    eventDate: 'Nov, 8, 2019 20:00:00',
    eventPassed: false,
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  };

  getRemainingTime(eventDate) {
    let deltaTime = (Date.parse(eventDate) - Date.parse(new Date())) / 1000;

    if (deltaTime < 0) {
      this.setState({
        eventPassed: true,
        days: '-',
        hours: '-',
        minutes: '-',
        seconds: '-'
      });
    } else {
      const days = Math.floor(deltaTime / (24 * 60 * 60));
      deltaTime -= days * 24 * 60 * 60;

      const hours = Math.floor(deltaTime / (60 * 60)) % 24;
      deltaTime -= hours * 60 * 60;

      const minutes = Math.floor(deltaTime / 60) % 60;
      deltaTime -= minutes * 60;

      const seconds = Math.floor(deltaTime % 60);

      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  }

  componentDidMount() {
    setInterval(() => this.getRemainingTime(this.state.eventDate), 1000);
  }

  render() {
    return (
      <Slide left delay={800}>
        <div className="countdown">
          <div className="countdown__top">
            {this.state.eventPassed ? 'Event is over' : 'Event starts in:'}
          </div>
          <div className="countdown__bottom">
            <div className="countdown__number">{this.state.days}</div>
            <div className="countdown__label">Days</div>
            <div className="countdown__number">{this.state.hours}</div>
            <div className="countdown__label">Hours</div>
            <div className="countdown__number">{this.state.minutes}</div>
            <div className="countdown__label">Minutes</div>
            <div className="countdown__number">{this.state.seconds}</div>
            <div className="countdown__label">Seconds</div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default Countdown;
