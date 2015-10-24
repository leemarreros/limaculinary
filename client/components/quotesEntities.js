'use strict';

import React from 'react';

class QuotesEntities extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className='quotesEntities'>
        <div className='sponsor'>
          <h1>“But Peru has one of the great cuisines of the world.”</h1>
          <img src='../../img/newYorkT.png'/>
        </div>
        <div className='sponsor'>
          <h1>“More and more of the world’s discerning eaters are flying here for the purpose of culinary discovery.”</h1>
          <img src='../../img/wallStreetJ.png'/>
        </div>
      </div>
      );
  }
};

module.exports = QuotesEntities;
