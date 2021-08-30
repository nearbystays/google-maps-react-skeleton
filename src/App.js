import React, { Component } from 'react';
import MapContainer from './Map'

class App extends Component {

  render() {
    return (
      <MapContainer
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
}

export default App;
