import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = ({
  drawerOpen,
  onDrawerClose,
  menuVisible,
  menuOpen,
  menuClose
}) => {
  const navList = [
    'Featured Artist',
    'Event Info',
    'Latest News',
    'Pricing',
    'Get Directions'
  ];

  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -100
    });

    onDrawerClose(false);
  };

  const onMenuClick = () => {
    menuOpen();
    onDrawerClose(false);
  };

  const renderlistItems = navList.map(listItem => {
    return (
      <ListItem
        button
        className="side-drawer__item"
        style={{ padding: '3rem 20rem 3rem 3rem' }}
        onClick={() => scrollToElement(listItem)}
        key={listItem}
      >
        {listItem}
      </ListItem>
    );
  });

  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      className="side-drawer"
      onClose={() => onDrawerClose(false)}
    >
      <List
        component="nav"
        style={{ paddingTop: '3rem' }}
        className="side-drawer__list"
      >
        {renderlistItems}
        <ListItem
          button
          className="side-drawer__item"
          style={{ padding: '3rem 20rem 3rem 3rem' }}
          onClick={() => onMenuClick()}
          key="Menu"
        >
          Menu
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
