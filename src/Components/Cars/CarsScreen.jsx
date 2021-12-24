import React from "react";
import AllCars from "./allCars";
import { carData } from "./Constants";
function Car(props) {
  console.log(props);
  return (
    <div className="flexGrid">
      <div className="carDetails">
        <AllCars carData={carData} />
      </div>
    </div>
  );
}
export default Car;
