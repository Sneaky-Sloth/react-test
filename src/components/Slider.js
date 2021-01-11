import React from 'react';
import WhiteBox from './WhiteBoxes/WhiteBox'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css'


function Slider() {
  var options = {
    // items: 3,
    nav: true,
    rewind: true,
    autoplay: true,
    navText : ["<i class='fa fa-chevron-left fa-2x'></i>","<i class='fa fa-chevron-right fa-2x'></i>"],
    responsive:{
      0:{
          items:1,
          nav: true
      },
      720:{
          items:3,
          nav: true
      },
  }
    };

  return (
  <div id="slider" className=" container text-center my-3">
      <OwlCarousel options={options} >
        <div className="mx-2 w-100 text-center">
          <WhiteBox heading="Heading" text="Lorem ipsum dolor, sit amet" icon="fab fa-wordpress fa-3x" />   
        </div>
        <div className="mx-2 w-100 text-center">
          <WhiteBox heading="Heading" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet iure minus, asperiores
                    tempora, adipisci autem modi maxime"/>  
        </div>
        <div className="mx-2 w-100 text-center">
          <WhiteBox heading="Ultra Mega Super Long Heeding" text="Lorem ipsum dolor, sit amet"  />   
        </div>
        <div className="mx-2 w-100 text-center">
          <WhiteBox heading="Heading" text="Lorem ipsum dolor, sit amet" icon="fab fa-wordpress fa-3x" />  
        </div>
        <div className="mx-2 w-100 text-center">
          <WhiteBox heading="Heading" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet iure minus, asperiores
                    tempora, adipisci autem modi maxime"/>   
        </div>
        <div className="mx-2 w-100 text-center">
          <WhiteBox heading="Ultra Mega Super Long Heeding" text="Lorem ipsum dolor, sit amet"  />  
        </div>
      </OwlCarousel>
    </div>
  )
}



export default Slider;