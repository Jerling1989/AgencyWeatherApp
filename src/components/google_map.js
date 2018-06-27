// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';

// CREATE GOOGLE MAP CLASS COMPONENT
class GoogleMap extends Component {
	// COMPONENT LIFE CYCLE METHOD
	componentDidMount() {
		// CREATE EMBEDDED GOOGLE MAP
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}
	// REACT RENDER METHOD
	render() {
		// RETURN DIV WITH MAP REF
		return <div ref="map" />;  // THIS.REFS.MAP
	}
}

// EXPORT GOOGLEMAP COMPONENT
export default GoogleMap;