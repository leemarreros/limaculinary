'use strict';

import React from 'react';

var content = [
  {
    nameDish: 'Pollo a la brasa',
    views: '3,324',
    src: ''
  }
];

class MainScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className='mainScreen'>
        <div className='header'>
          <h1 className='limaC'>LIMA CULINARY</h1>
          <img src='../../img/miniFireLogo.png'/>
          <h1 className='videos'>VIDEOS</h1>
        </div>
        <div className='content'>
          {for (var i=0;){}}
          <div className='items'>
          </div>
        </div>
      </div>
      );
  }
};

module.exports = MainScreen;
