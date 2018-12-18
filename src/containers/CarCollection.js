import React, { Component } from 'react';
import CarCard from '../components/CarCard'

class CarCollection extends Component {


  render() {
    let arr = this.props.allCars.map(eachCar =>{
      return <CarCard car={eachCar} key={eachCar.id} handleClick={this.props.handleClick}/>
    })
    return (
      <div>
        {arr}
      </div>
    );
  }

}

export default CarCollection;
