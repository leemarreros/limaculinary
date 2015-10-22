'use strict';

import React from 'react';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className='headerE'>
        <span><h1>LIMA CULINARY</h1></span>
        <div className='imgWrapper'>
          <img src='../img/arrozConMariscos.png'/>
          <img src='../img/causaRellena.png'/>
          <img src='../img/cevicheModerno.png'/>
          <img src='../img/chichaMorada.png'/>
          <img src='../img/pachamanca.png'/>
          <img src='../img/picarones.png'/>
          <img src='../img/pollo-a-la-brasa.png'/>
        </div>
      </div>
      );
  }
};

module.exports = Header;
