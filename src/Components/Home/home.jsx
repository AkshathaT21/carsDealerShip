import React from "react";
import {Link} from 'react-router-dom'
import "../../App.css"
function Car() {
  
  
  
  return (
    <div>
      <header>
        <div className="banner">
          <h1>{"Car dealership"}</h1>
          <div />
          <Link to="/cars" className="btn btn-primary">
          Explore all models here
          </Link>
        </div>
      </header>
    </div>
  );
}
export default Car;
