import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        return (
            <Map style={this.props.style} google={this.props.google} zoom={8}></Map>
        );
    }
}

export default GoogleApiWrapper({
    // restricted to jpoehnelt.github.io/* and localhost 
    apiKey: "AIzaSyBXrsqPkoBiydDD3fnVnzbusRw4CemW8lY"
})(MapContainer)