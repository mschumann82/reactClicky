import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
    <div>
      <ul className="navbar-nav">
        <li>
          Memory Game
         
        </li>
        <li>
          
            Click an image to begin!
          
        </li>
        <li>
          
            Score: {props.score} | Top Score: {props.topScore}
          
        </li>
      </ul>
      <h3 className="center">Click on an image to earn points, but don't click on any more than once!</h3>
    </div>
  </nav>
);

export default Navbar;
