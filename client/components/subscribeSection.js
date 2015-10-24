'use strict';

import React from 'react';
import Firebase from 'firebase';
var ref = new Firebase("XXXXXXXXX");
var userEmail = ref.child("emails");
// var newUserEmail = userEmail.push();

var ENTER_KEY_CODE = 13;

class SubscribeSection extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  _onChange(event, value) {
    this.setState({text: event.target.value})
  }

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      var text = this.state.text.trim();
      if (text) {
        console.log('Subscribed as: ', text);
        userEmail.push(text);
      }
      this.setState({text: ''});
    }
  }

  _subscribeButton(){
    if (this.state.text) {
        console.log('Subscribed as: ', this.state.text);
        userEmail.push(this.state.text);
      }
    this.setState({text: ''});
  }

  render() {
    return (
      <div className='descriptionIdea'>
        <div className='wrapperDescription'><h1>Subscribe and we’ll let you know when this is ready:</h1></div>
        <div className='wrapperSubscribeInput'>
          <div className='subscribeInput'>
            <div className='textAreaWrapper'>
              <textarea
                className="emailComposer"
                placeholder='Type here your email here.'
                name="message"
                value={this.state.text}
                onChange={this._onChange.bind(this)}
                onKeyDown={this._onKeyDown.bind(this)}/>
            </div>
            <div className='buttonSubscribe' onClick={this._subscribeButton.bind(this)}>
              <h1 >Subscribe me!</h1>
            </div>
          </div>
        </div>
      </div>
      );
  }
};

module.exports = SubscribeSection;