import React from 'react';
import { Link } from 'react-scroll';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import SideDrawer from './SideDrawer';

const Header = ({
  drawerOpen,
  headerVisible,
  toggleDrawer,
  menuVisible,
  menuOpen,
  menuClose
}) => {
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
          <Link
            to="Featured Artist"
            smooth={true}
            duration={1000}
            delay={100}
            className="header__logo"
          >
            <div className="header__logo-title">The Canal Club</div>
            <div className="header__logo-subtitle">
              Richmond's Premiere Music Venue
            </div>
          </Link>

          <div className="header__menu-icon">
            <IconButton
              aria-label="Menu"
              color="inherit"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
          <SideDrawer
            drawerOpen={drawerOpen}
            onDrawerClose={value => toggleDrawer(value)}
            menuVisible={menuVisible}
            menuOpen={menuOpen}
            menuClose={menuClose}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
