import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = props => {
  const navList = [
    'Featured Artist',
    'Event Info',
    'Latest News',
    'Pricing',
    'Get Directions',
    'Menu'
  ];

  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -100
    });

    props.onClose(false);
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
      open={props.open}
      className="side-drawer"
      onClose={() => props.onClose(false)}
    >
      <List
        component="nav"
        style={{ paddingTop: '3rem' }}
        className="side-drawer__list"
      >
        {renderlistItems}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
