import React from 'react';

function WhiteBox(props) { 
  return (
      <div className="card h-100 border-0 rounded-0">
        <div className="card-body">
          <h3 className="card-title pt-4 pb-2">{props.heading}</h3>
          <p className="card-text">{props.text}.</p>
          <i class={props.icon}></i>
        </div>
      </div>
  );
}

export default WhiteBox;