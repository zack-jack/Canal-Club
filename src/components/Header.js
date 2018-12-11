import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

import SideDrawer from './SideDrawer';

const Header = ({ drawerOpen, headerVisible, toggleDrawer }) => {
  return (
    <div>
      <AppBar
        position="fixed"
        className="header"
        style={{
          backgroundColor: headerVisible ? '#212121' : 'transparent',
          boxShadow: 'none'
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
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <SideDrawer
            open={drawerOpen}
            onClose={value => toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
