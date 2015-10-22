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
        <h1 className='backDescription'>IMAGINE THAT YOU COULD MAKE THE BEST<span className='limaColor'> LIMA’S </span> FOOD IN YOUR KITCHEN</h1>
      </div>
      );
  }
};

module.exports = backgroundTop;
