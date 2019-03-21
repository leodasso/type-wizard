import React from 'react';
import './BodyButton.css';


const BodyButton = (props) => (
  
  <button 
    className={props.className ? "body-button " + props.className : "body-button"} 
    onClick={props.onClick}>
      {props.children}
  </button>
);

export default BodyButton;