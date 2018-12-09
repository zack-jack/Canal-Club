import React from 'react';
import Divider from '@material-ui/core/Divider';

import Discount from './Discount';
import LatestCopy from './LatestCopy';

const Latest = () => {
  return (
    <div className="latest">
      <Divider />
      <LatestCopy />
      <Divider />
      <Discount />
      <Divider />
    </div>
  );
};

export default Latest;
