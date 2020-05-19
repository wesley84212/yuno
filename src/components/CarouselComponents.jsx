import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// requires a loader

import { Carousel } from 'react-responsive-carousel';

function CarouselComponents(){

     //fetch 資料庫產生
     return (<>
        <Carousel>
                  <div>
                      <img src="" alt=""/>
                      <p className="legend">Legend 1</p>
                  </div>
                  <div>
                      <img src="" alt=""/>
                      <p className="legend">Legend 2</p>
                  </div>
                  <div>
                      <img src="" alt=""/>
                      <p className="legend">Legend 3</p>
                  </div>
              </Carousel>
           </>)  

}

export default CarouselComponents