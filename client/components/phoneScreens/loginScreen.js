'use strict';

import React from 'react';


class LoginScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className='LoginScreen'>
        <h1 className='limaC'>LIMA  CULINARY</h1>
        <img src='../../img/fireLogo.png'/>
        <div className='learnDescription'><h1>Learn-by-doing videos about the best Lima’s culinary</h1></div>
        <div className='freeTrialButton'><h1>START YOUR 30-DAY FREE TRIAL</h1></div>
        <div className='signInButton'><h1>ALREADY SUBSCRIBED? SIGN IN</h1></div>
        <h1 className='termsC'>By signing in, you agree to our Terms and Privacy Policy</h1>
      </div>
      );
  }
};

module.exports = LoginScreen;
