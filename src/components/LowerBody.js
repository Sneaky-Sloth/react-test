import React from 'react';
import WhiteBox from './WhiteBoxes/WhiteBox';
import '../assets/dist/LowerBody.css'

function LowerBody () {
  return (
    <div id="lowerBody" className="text-center py-5">
      <div id="page-content" class="text-center mb-3">
        <h1 class="mt-3">Heading</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <h2 class="my-3">Heading</h2>
        <div id="lowerBody-content" class="container">
          <div class="row">
          <div className="col-12 col-md-4 col-lg-4 px-2 my-3 text-center"> 
            <WhiteBox heading="Heading" text="Lorem ipsum dolor, sit amet" icon="fab fa-wordpress fa-3x" />
          </div>
          <div className="col-12 col-md-4 col-lg-4 px-2 my-3 text-center"> 
            <WhiteBox heading="Heading" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet iure minus, asperiores
                    tempora, adipisci autem modi maxime"/>
          </div>
          <div className="col-12 col-md-4 col-lg-4 px-2 my-3 text-center"> 
            <WhiteBox heading="Ultra Mega Super Long Heeding" text="Lorem ipsum dolor, sit amet"  />
          </div> 
          </div>
        </div>
      </div>
   </div>
  );
}

export default LowerBody;