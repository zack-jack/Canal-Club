import React from 'react';
import { Divider } from '@material-ui/core';

import Discount from './Discount';
import LatestCopy from './LatestCopy';

const Latest = () => {
  return (
    <div className="latest">
      <Divider />
      <LatestCopy />
      <Divider />
      <Discount />
    </div>
  );
};

export default Latest;
