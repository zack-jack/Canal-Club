import React, { Component } from 'react';

import 'normalize.css';
import './styles/App.scss';

import Header from './components/Header';
import Featured from './components/Featured';
import EventInfo from './components/EventInfo';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '1500px' }}>
        <Header />
        <Featured />
        <EventInfo />
      </div>
    );
  }
}

export default App;
