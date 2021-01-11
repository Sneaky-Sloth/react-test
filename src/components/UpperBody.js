import React from 'react';
import Slider from './Slider';
import '../assets/dist/UpperBody.css'

function UpperBody () {
  return (
    <div id="upperBody" className="text-center text-white py-5">
      <h1>Heading</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <Slider />
      <span className="dot float-center"></span>
   </div>
  );
}

export default UpperBody;