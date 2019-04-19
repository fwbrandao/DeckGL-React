import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map'
import MyPolygonLayer from './components/PolygonLayer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
