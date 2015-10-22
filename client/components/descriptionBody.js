'use strict';

import React from 'react';

class DescriptionBody extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className='descriptionIdea'>
        <h1>Lima Culinary is a serie of instructional videos about the making of Peruvian Food.</h1>
      </div>
      );
  }
};

module.exports = DescriptionBody;