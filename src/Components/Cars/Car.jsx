import React, { useState, useEffect } from "react";
import "../../Images/homecar.jpg";
import 'antd/dist/antd.css';

const Car = ( props) => {
  const { id, spec, model, price, image,showDetails } = props.carData;
  const showData = (e) => {
    props.showDetails(e);
  }
  return (
      <div className="car">
        <div className="imageContainer">
          <img
            src={require(`../../Images/${image}`).default}
            alt="car image"
            id={id}
            onClick={(e) => showData(e)}
          />
          <div className="car-info">{model}</div>
          <p className="price-top">{price} lac onwards </p>
        </div>
      </div>
  );
};
export default Car;