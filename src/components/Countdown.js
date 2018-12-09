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

  renderCountdownItems() {
    const timeUnits = ['days', 'hours', 'minutes', 'seconds'];

    const items = timeUnits.map(unit => {
      return (
        <div className="countdown__item" key={unit}>
          <div className="countdown__number">{this.state[unit]}</div>
          <div className="countdown__label">{unit}</div>
        </div>
      );
    });

    return items;
  }

  componentDidMount() {
    setInterval(() => this.getRemainingTime(this.state.eventDate), 1000);
  }

  render() {
    return (
      <Slide left delay={600}>
        <div className="countdown">
          <div className="countdown__top">
            {this.state.eventPassed ? 'Event is over' : 'Event starts in:'}
          </div>
          <div className="countdown__bottom">{this.renderCountdownItems()}</div>
        </div>
      </Slide>
    );
  }
}

export default Countdown;
