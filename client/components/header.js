'use strict';

import React from 'react';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="header">
        <h1>LIMA CULINARY</h1>
      </div>
      );
  }
};

module.exports = Header;
