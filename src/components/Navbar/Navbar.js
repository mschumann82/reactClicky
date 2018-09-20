import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = props => (
  <nav className="navbar">
    
    <div className="size">
      <ul className="navbar-nav">
        <li className="list">
          Memory Game
         
        </li>
        <li className="list">
          
            Click an image to begin!
          
        </li>
        <li className="list">
          
            Score: {props.score} | 
          
        </li>
        <li className="list">
          
             Top Score: {props.topScore}
          
        </li>
        <li className="list">
          
             {props.correctIncorrect} 
          
        </li>
      </ul>
      </div>
      
  </nav>
);

export default Navbar;
