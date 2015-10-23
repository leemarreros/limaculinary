'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import BackgroundTop from './components/backgroundTop';
import DescriptionBody from './components/descriptionBody';
import PhoneScreens from './components/phoneScreens';

class LimaCulinary extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className='globalWrapper'>
        <div className='headerWrap'>
          <Header/>
        </div>
        <div className='backgroundWrap'>
          <BackgroundTop/>
        </div>
        <div className='descriptionWrap'>
          <DescriptionBody/>
        </div>
        <div className='phoneScreensWrap'>
          <PhoneScreens/>
        </div>
      </div>
      );
  }
};

ReactDOM.render(<LimaCulinary/>, document.getElementById('react'));
