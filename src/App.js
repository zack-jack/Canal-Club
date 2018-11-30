import React, { Component } from 'react';

import 'normalize.css';
import './styles/App.scss';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
