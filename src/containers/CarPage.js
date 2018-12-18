import React, { Component } from 'react';
import CarCollection from '../containers/CarCollection'
import '../App.css'

class CarPage extends Component {

  state={
    allCars: [],
    myCars: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/cars")
    .then(res => res.json())
    .then(cars =>{
      let arr = cars.map(a => {
        return {car: a, isMine: false}
      })
      this.setState({allCars: arr})
    })
  }

  handleClick = (e, car) =>{
    let arr = [...this.state.myCars,car]
    this.setState({myCars:arr})
    console.log(this.state.myCars)
  }

  render() {

    return (
      <div className='grid'>
        <div className="box box4">
          <h1>My Cars</h1>
        </div>
        <div className="box box4">
        <h1>Cars For Sale</h1>
          <CarCollection allCars={this.state.allCars} handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }

}

export default CarPage;
