'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

class LimaCulinary extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Header/>
        <div>Test</div>
      </div>
      );
  }
};


ReactDOM.render(<LimaCulinary/>, document.getElementById('react'));
