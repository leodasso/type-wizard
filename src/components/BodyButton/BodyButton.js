import React from 'react';
import './BodyButton.css';


const BodyButton = (props) => (
  <button className="body-button" onClick={props.onClick}>
      {props.children}
  </button>
);

export default BodyButton;