import React from 'react';
import Close from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import MenuItem from './MenuItem';

const Menu = ({ visible, menuOpen, menuClose }) => {
  const menu = [
    {
      title: 'Basket of Fries',
      description: 'with cheese for an additional $1',
      price: 2.95
    },
    {
      title: 'Nachos',
      description:
        'a large plate of tortilla chips topped with cheese, your choice of chicken or beef, diced lettuce and tomato, salsa, sour cream, and jalapenos',
      price: 7.95
    },
    {
      title: 'Onion Rings',
      description: 'beer battered',
      price: 3.95
    },
    {
      title: 'Soft Drinks',
      description: 'Coke, Diet Coke, Sprite, Root Beer - 16oz',
      price: 2.95
    },
    {
      title: 'Mozzarella Sticks',
      description: 'served with marinara sauce',
      price: 4.95
    },
    {
      title: 'Quesadilla',
      description:
        'grilled flour torilla filled with cheddar cheese, served with sour cream and salsa on the side, and your choice of chicken or beef',
      price: 6.95
    },
    {
      title: 'Chicken Wings',
      description: 'served with a side of ranch dressing',
      price: 5.95
    },
    {
      title: 'Beer',
      description: 'Bud Light, Coors Light, Pabst Blue Ribbon - 12oz',
      price: 4.95
    }
  ];

  const renderMenuItems = () => {
    const colSplitPoint = Math.floor(menu.length / 2);

    return (
      <Grid container spacing={40}>
        <Grid item xs={6}>
          {menu.slice(0, colSplitPoint).map(({ title, description, price }) => (
            <MenuItem
              key={title}
              title={title}
              description={description}
              price={price}
            />
          ))}
        </Grid>
        <Grid item xs={6}>
          {menu.slice(colSplitPoint).map(({ title, description, price }) => (
            <MenuItem
              key={title}
              title={title}
              description={description}
              price={price}
            />
          ))}
        </Grid>
      </Grid>
    );
  };

  return (
    <Dialog
      aria-labelledby="menu"
      aria-describedby="menu"
      fullWidth={true}
      maxWidth="md"
      open={visible}
      onBackdropClick={menuClose}
      className="menu"
    >
      <DialogTitle>
        <div className="menu__title">
          <div className="menu__header">Menu</div>
          <IconButton onClick={menuClose} className="menu__button">
            <Close />
          </IconButton>
        </div>
      </DialogTitle>
      <Divider variant="middle" />
      <DialogContent>
        <div className="menu__items">{renderMenuItems()}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Menu;
