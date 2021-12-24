import React, { useState,useEffect } from "react";
import {Link} from 'react-router-dom'
import "../../App.css"
import {carDetailsData} from "./Constants"
const CarDetails =() => {
  const [detailedData,setDetailedData]=useState([]);
  useEffect(() => {
    let detailedData= carDetailsData.filter(data=>data.id == window.location.search.split("=")[1])
    setDetailedData(detailedData[0])
  },[]);
  return (
    <>
      <div className="banner banner-detail">
          <h2>The All New {detailedData.model}</h2>
            <div>{detailedData.spec}</div>
            {detailedData.image ?<img src={require(`../../Images/${detailedData.image}`).default} alt="car image" />:""}
          <div />
        </div>
        <div className="banner banner-detail">
          <h2>Finest Exteriors</h2>
          {detailedData.exterior1 ?<img src={require(`../../Images/${detailedData.exterior1}`).default} alt="car image" />:""}
          {detailedData.exterior2 ?<img src={require(`../../Images/${detailedData.exterior2}`).default} alt="car image" />:""}
        </div>
        <div className="banner banner-detail">
          <h2>Comfortable and spacious Interiors</h2>
          {detailedData.interior1 ?<img src={require(`../../Images/${detailedData.interior1}`).default} alt="car image" />:""}
          {detailedData.interior2 ?<img src={require(`../../Images/${detailedData.interior2}`).default} alt="car image" />:""}
        </div>
        <div className="banner banner-detail">
          <p>Available Colors: {detailedData.colors}</p>
          <p>Price: {detailedData.price} lac onwards</p>
          <p>To book for a Test Drive or to Check Price
          <div><Link to="/contactUs" className="btn-primary">
            Click Here
          </Link></div></p>
        </div>
    </>
  );
}
export default CarDetails;
