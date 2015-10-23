'use strict';

import React from 'react';

var infoComments = [
  {
    avatarSrc: '../../img/avatarImage1.png',
    nameLocation: 'Laura - Mountain View',
    comment: '“This is and will be one of my favorite Peruvian  recipes. Love the video!”',
    dishContribution: '../../img/dishContribution1.png'
  },
  {
    avatarSrc: '../../img/avatarImage2.png',
    nameLocation: 'Stefano - San Franciso',
    comment: '“I’m glad I’ve found this recipe. Very well explained and easy to make.”',
    dishContribution: '../../img/dishContribution2.png'
  }
];

class VideoReproduction extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className='videoReproduction'>
        <div className='header'>
          <h1 className='limaC'>LIMA CULINARY</h1>
          <img src='../../img/miniFireLogo.png'/>
          <h1 className='videos'>Lomo Saltado</h1>
        </div>
        <div className='bodyWrapper'>
          <div className='contentBody'>
            <div className='videoProgress'>
              <div className='progressWrapper'><img src='../../img/progressVideoBar.png'/></div>
              <div className='steps'>
                <h1>1. Preparing the French Fries</h1>
                <h1 className='stepNumber2'>2. Cutting the welsh onion</h1>
                <img src='../../img/videoToReproduce.png'/>
                <h1 className='stepNumber3'>3. Cutting and seasoning the beef</h1>
                <h1>4. Mixing all the ingredients</h1>
                <h1>5. Serving the food</h1>
              </div>
            </div>
            <div className='commentsWrapper'>
              {infoComments.map(function(item, i){
                return (
                  <div className='itemComment' key={i}>
                    <div className='contentComment'>
                      <div className='avatarAndComment'>
                        <img src={item.avatarSrc}/>
                        <h1>{item.nameLocation}</h1>
                      </div>
                      <h1>{item.comment}</h1>
                    </div>
                    <div className='pictureContrib'>
                      <img src={item.dishContribution}/>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

module.exports = VideoReproduction;
