import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = props => {
  const navList = [
    'Featured',
    'Venue Info',
    'Highlights',
    'Pricing',
    'Location'
  ];

  const renderlistItems = navList.map(listItem => {
    return (
      <ListItem
        button
        className="side-drawer__item"
        onClick={() => console.log(listItem)}
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
      <List component="nav" className="side-drawer__list">
        {renderlistItems}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
