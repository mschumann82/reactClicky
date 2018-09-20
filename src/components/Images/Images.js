import React from "react";
// import { Link } from "react-router-dom";
import "./Images.css";

const Images = props => (
  <div 
    className="card" 
    value={props.id} 
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);



export default Images;
