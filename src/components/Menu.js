import React from 'react';
import Close from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import MenuItem from './MenuItem';

const Menu = ({ dialogOpen, dialogClose }) => {
  const menu = [
    {
      title: 'Basket of Fries',
      description: 'with cheese for an additional $1',
      price: 2.95
    },
    {
      title: 'Onion Rings',
      description: 'beer battered',
      price: 3.95
    },
    {
      title: 'Mozzarella Sticks',
      description: 'served with marinara sauce',
      price: 4.95
    },
    {
      title: 'Nachos',
      description:
        'a large plate of tortilla chips topped with cheese, your choice of chicken or beef, diced lettuce and tomato, salsa, sour cream, and jalapenos',
      price: 7.95
    },
    {
      title: 'Quesadilla',
      description:
        'grilled flour torilla filled with cheddar cheese, served with sour cream and salsa on the side, and your choice of chicken or beef',
      price: 6.95
    },
    {
      title: 'Chicken Wings',
      description: 'Traditional wings served with a side of ranch dressing',
      price: 5.95
    },
    {
      title: 'Soft Drinks',
      description: 'Coke, Diet Coke, Sprite, Root Beer - 16oz',
      price: 2.95
    },
    {
      title: 'Beer',
      description: 'Bud Light, Coors Light, Pabst Blue Ribbon - 12oz',
      price: 4.95
    }
  ];

  const renderMenuItems = menu.map(({ title, description, price }) => {
    return (
      <MenuItem
        key={title}
        title={title}
        description={description}
        price={price}
      />
    );
  });

  return (
    <Dialog
      aria-labelledby="menu"
      aria-describedby="menu"
      open={dialogOpen}
      className="menu"
    >
      <DialogTitle className="menu__title">
        <div className="menu__header">Menu</div>
        <IconButton onClick={dialogClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent className="menu__items">{renderMenuItems}</DialogContent>
    </Dialog>
  );
};

export default Menu;
