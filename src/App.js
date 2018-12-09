import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import theme from './theme';

import 'normalize.css';
import './styles/App.scss';

import Header from './components/Header';
import Featured from './components/Featured';
import EventInfo from './components/EventInfo';
import Latest from './components/Latest';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Featured />
          <EventInfo />
          <Latest />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
