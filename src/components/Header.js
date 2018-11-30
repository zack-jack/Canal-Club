import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

import SideDrawer from './SideDrawer';

class Header extends Component {
  state = {
    drawerOpen: false,
    headerVisible: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    // If user scrolls down, then the
    // header background is visible
    if (window.scrollY > 0) {
      this.setState({
        headerVisible: true
      });
    }

    // If user scrolls back up to the top
    // then the header is invisible again
    if (window.scrollY === 0) {
      this.setState({
        headerVisible: false
      });
    }
  };

  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };

  render() {
    return (
      <div>
        <AppBar
          position="fixed"
          className="header"
          style={{
            backgroundColor: this.state.headerVisible
              ? '#2d3436'
              : 'transparent'
          }}
        >
          <Toolbar>
            <div className="header__logo">
              <div className="header__logo-title">The Canal Club</div>
              <div className="header__logo-subtitle">
                Richmond's Premiere Music Venue
              </div>
            </div>

            <div className="header__menu-icon">
              <IconButton
                aria-label="Menu"
                color="inherit"
                onClick={() => this.toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <SideDrawer
              open={this.state.drawerOpen}
              onClose={value => this.toggleDrawer(value)}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
