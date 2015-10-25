'use strict';

import React from 'react';
import Firebase from 'firebase';
var ref = new Firebase("https://lima-culinary.firebaseio.com/");
var userEmail = ref.child("emails");
var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
var ENTER_KEY_CODE = 13;

class SubscribeSection extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      text: null,
      validateEmail: null
    };
  }

  _onChange(event, value) {
    this.setState({text: event.target.value}, function(){
      console.log(!!re.exec(this.state.text));
      this.setState({validateEmail: !!re.exec(this.state.text)});
    })

  }

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      var text = this.state.text.trim();
      if (text && !!re.exec(text)) {
        console.log('Subscribed as: ', text);
        userEmail.push(text);
        this.setState({text: ''});
      } else if (!re.exec(text)) {
        console.log('wrong email')
      }
    }
  }

  _subscribeButton(){
    if (this.state.text && !!re.exec(this.state.text)) {
        console.log('Subscribed as: ', this.state.text);
        userEmail.push(this.state.text);
        this.setState({text: ''});
      } else if (!re.exec(this.state.text)) {
        console.log('wrong email')
      }
  }

  render() {
    console.log(!!this.state.text);
    return (
      <div className='descriptionIdea'>
        <div className='wrapperDescription'><h1>Subscribe and we’ll let you know when this is ready:</h1></div>
        <div className='wrapperSubscribeInput'>
          <div className='subscribeInput'>
            <div className='textAreaWrapper' id={!!this.state.text ? (this.state.validateEmail ? 'valid' : 'notValid') : null}>
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