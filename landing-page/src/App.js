import React, {Component} from 'react';
import './App.css'
import Trips from './Trips/Trips'

class App extends Component {
  state = {
    trips: [
      {name: "Trip 1", length: "45 min", price: "250kr"},
      {name: "Trip 2", length: "90 min", price: "500kr"},
      {name: "Trip 3", length: "120 min", price: "750kr"}
    ]
  };
  render() {
    return (
      <div>
        <h1>Paddle with us in Your Summer vacation!</h1>
        <div className="trip-ads">
        <Trips
        name={this.state.trips[0].name}
        length={this.state.trips[0].length}
        price={this.state.trips[0].price}
        />
        <Trips
        name={this.state.trips[1].name}
        length={this.state.trips[1].length}
        price={this.state.trips[1].price}
        />
        <Trips
        name={this.state.trips[1].name}
        length={this.state.trips[1].length}
        price={this.state.trips[1].price}
        />
        </div>
      </div>
    )
  }
}
export default App;