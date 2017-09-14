import React, { Component } from 'react';
import '../styles/App.css';
import earthquakes from '../data/actors.js';

class EarthquakeList extends Component{
  render(){

    let earthqaukesArray = earthquakes.map(earthquake => {
      return (
        <div className="col-sm-6" key={earthquake.id}>
          <div className="card" >
            <div className="card-block">
              <h4 className="card-title">{earthquake.place}</h4>
              <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquake.mag}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Time: {moment({earthquake.time}).format('llll')}</h6>
              <p className="card-text">Coordinates: {earthquake.coordinates}</p>

              <a href={earthquake.url} className="card-link">USGS Event Link</a>

            </div>
          </div>
        </div>
      )
    });

    return (
    <div className="quake-list">
      <div className="row">
            {quakes}
      </div>
    </div>
  )
}
}











class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">
          "Earthquakes!"
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
