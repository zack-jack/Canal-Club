import React, { Component } from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import 'normalize.css';
import './styles/App.scss';

import Header from './components/Header';
import Featured from './components/Featured';
import EventInfo from './components/EventInfo';
import Latest from './components/Latest';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/Footer';

library.add(faEnvelope, faFacebookF, faTwitter, faInstagram);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Featured />
          <EventInfo />
          <Latest />
          <Pricing />
          <Location />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
