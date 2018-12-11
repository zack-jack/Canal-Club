import React from 'react';

const MenuItem = ({ title, description, price }) => {
  return (
    <div className="menu-item">
      <h2 className="menu-item__title">{title}</h2>
      <div className="menu-item__description">{description}</div>
      <div className="menu-item__price">${price}</div>
    </div>
  );
};

export default MenuItem;
