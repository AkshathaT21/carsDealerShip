import Car from "./Car";
import React, { useState, useEffect } from "react";
import { Modal,Button } from "antd";
import {Link} from 'react-router-dom'
const AllCars = ({ carData }) => {
  const [allCarData, setAllCarData] = useState(carData);
  const [modalData, setData] = useState([]);
  const [isModalVisible, setShowModal] = useState(false);
  const showDetails = (e) => {
    for (let i = 0; i < allCarData.length; i++) {
      if (allCarData[i].id == e.target.id) setData(allCarData[i]);
    }
    setShowModal(true);
  };
  const handleOk = () => {
    setShowModal(false);
  };
  const knowMore = () =>{
  }
  if (carData && carData.length === 0) {
    return (
      <div className="no-results">
        <h3>0 Results</h3>
      </div>
    );
  }

  return (
    <>
      <section className="allCars">
        <div className="allCarsAlign">
          {carData.map((car) => {
            return <Car key={car.id} carData={car} showDetails={showDetails} />;
          })}
        </div>
      </section>
      {isModalVisible && <Modal
        title={modalData.model}
        visible={isModalVisible}
        onCancel={handleOk}
        footer={[
            <Button key="link">

              <Link to={{ 
              pathname: `/carDetails/${modalData.id}`, 
              search: `id=${modalData.id}`
  
            }}>Know More</Link>
            </Button>]}>
        <div className="imageContainer">
          <img src={require(`../../Images/${modalData.image}`).default} alt="car image" />
          <div><label>Price:</label>{modalData.price} lac onwards</div>

          <div className="car-info">{modalData.spec}</div>
        </div>
      </Modal>}
    </>
  );
};

export default AllCars;
