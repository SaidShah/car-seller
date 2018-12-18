import React from 'react';
import '../App.css'

const CarCard = ({car, handleClick}) => (

  <div className="carBox">
    <h4>{car.car.make} {car.model}</h4>
    <h5>Year: {car.car.year} | Mileage: {car.mileage}</h5>
    <h4>class: {car.car.car_class}</h4>
    <img src={car.car.image} alt='' className="carImage" onClick={(e)=>handleClick(e,car)}/>
  </div>
);

export default CarCard;
