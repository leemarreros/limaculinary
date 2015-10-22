'use strict';

import React from 'react';

class backgroundTop extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className='backgroundTopImage'>
        <h1 className='backDescription'>IMAGINE THAT YOU<br/> COULD MAKE THE BEST<br/><span className='limaColor'>LIMA’S </span> FOOD IN YOUR<br/> KITCHEN</h1>
      </div>
      );
  }
};

module.exports = backgroundTop;
