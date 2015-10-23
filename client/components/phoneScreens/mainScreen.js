'use strict';

import React from 'react';

var content = [
  {
    nameDish: 'Pollo a la brasa',
    views: '3,324',
    src: '../../img/polloBrasaVideo.png'
  },
  {
    nameDish: 'Ceviche Mixto',
    views: '4,635',
    src: '../../img/cevicheVideo.png'
  },
  {
    nameDish: 'Lomo Saltado',
    views: '6,834',
    src: '../../img/lomoSaltadoVideo.png'
  }
];

class MainScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className='mainScreen'>
        <div className='header'>
          <h1 className='limaC'>LIMA CULINARY</h1>
          <img src='../../img/miniFireLogo.png'/>
          <h1 className='videos'>VIDEOS</h1>
        </div>
        <div className='contentWrapper'>
          <div className='content'>
            {content.map(function(item, i){
              return (
                <div className='items' key={i}>
                  <div className='infoWrapper'>
                    <h1 className='nameDish'>{item.nameDish}</h1>
                    <h1 className='viewDish'>{item.views} views </h1>
                    <img className='plusDish' src='../../img/Plus.png'/>
                    <img className='heartDish' src='../../img/heartBitmap.png'/>
                  </div>
                  <img className='picDish' src={item.src}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      );
  }
};

module.exports = MainScreen;
