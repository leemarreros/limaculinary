'use strict';

import React from 'react';
import LoginScreen from './phoneScreens/loginScreen';
import MainScreen from './phoneScreens/mainScreen';
import VideoReproduction from './phoneScreens/videoReproduction';

class phoneScreens extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className='phoneScreens'>
        <div className='phoneBoundaries'>
          <LoginScreen/>
        </div>
        <div className='phoneBoundaries'>
          <MainScreen/>
        </div>
        <div className='phoneBoundaries'>
          <VideoReproduction/>
        </div>
      </div>
      );
  }
};

module.exports = phoneScreens;
