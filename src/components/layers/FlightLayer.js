import React, { Component } from "react";
import axios from "axios";

const FLIGHT_API =
  "https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226";

class FlightLayer extends Component {
  state = {
    flights: []
  };

  async componentDidMount() {
    const { data: flights } = await axios.get(FLIGHT_API);
    this.setState({
      flights
    });
  }
  render() {
    console.log(this.state.flights);
    return <p>Ciao</p>;
  }
}

export default FlightLayer;
