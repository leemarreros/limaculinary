'use strict';

import React from 'react';
import Firebase from 'firebase';
var ref = new Firebase('https://lima-culinary.firebaseio.com/');
var userEmail = ref.child('emails');
var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
var ENTER_KEY_CODE = 13;

class SubscribeSection extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      validateEmail: null,
      openedModal: null,
    };
  }

  _openingModal() {
    this.setState({openedModal: true});
  }

  _closingModal() {
    this.setState({openedModal: false});
    console.log('closing');
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
        this._openingModal();
      } else if (!re.exec(text)) {
        console.log('wrong email')
        this._openingModal();
      }
    }
  }

  _subscribeButton(){
    if (this.state.text && !!re.exec(this.state.text)) {
        console.log('Subscribed as: ', this.state.text);
        userEmail.push(this.state.text);
        this.setState({text: ''});
        this._openingModal(true);
      } else if (!re.exec(this.state.text)) {
        this._openingModal(false);
        console.log('wrong email')
      }
  }
  _closePage() {
    window.close();
  }
  render() {
    var modalToShow = <div className='modalWrapper' onClick={this._closingModal.bind(this)}>
                        <div className='modalContent'>
                          <h2 className='exitButton' onClick={this._closingModal.bind(this)}>X</h2>
                            <div className='modalInfoWrong'>
                              <div className='wrapperEmail'>
                                {this.state.validateEmail ?
                                  <h1 className='validEmail'>Thank you! See you soon!</h1>:
                                  <h1>Email not valid</h1>}
                              </div>
                              <div onClick={this.state.validateEmail ? this._closePage.bind(this) : this._closingModal.bind(this)} className='buttonTryAgain'>
                                {this.state.validateEmail ?
                                  <h1>Close page</h1> :
                                  <h1>Try again</h1>}
                              </div>
                            </div>
                        </div>
                      </div>;

    return (
      <div className='descriptionIdea'>
        {this.state.openedModal ? <div className='closePopUpWindow' onClick={this._closingModal.bind(this)}></div> : null}
        <div className='wrapperDescription'><h1>Subscribe and we’ll let you know when this is ready:</h1></div>
        <div className='wrapperSubscribeInput'>
          <div className='subscribeInput'>
            <div className='textAreaWrapper' id={!!this.state.text ? (this.state.validateEmail ? 'valid' : 'notValid') : null}>
              <textarea
                className='emailComposer'
                placeholder='Type here your email here.'
                name='message'
                value={this.state.text}
                onChange={this._onChange.bind(this)}
                onKeyDown={this._onKeyDown.bind(this)}/>
            </div>
            <div className='buttonSubscribe' onClick={this._subscribeButton.bind(this)} href='#openModal'>
              <h1>Subscribe me!</h1>
            </div>
          </div>
            {this.state.openedModal ? modalToShow : null}
        </div>
      </div>
      );
  }
};

module.exports = SubscribeSection;