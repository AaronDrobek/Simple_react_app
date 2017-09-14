import React, { Component } from 'react';
import EarthquakeInfo from './EarthquakeInfo.js'
import EarthquakeList from './EarthquakeList.js'
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">


          <div className="my-header">
          "Earthquakes!"
          </div>
          <EarthquakeInfo />

        </div>
        <EarthquakeList />
      </div>
    );
  }
}

export default App;
