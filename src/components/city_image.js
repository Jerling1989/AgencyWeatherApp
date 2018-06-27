// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
import axios from 'axios';


// CREATE GOOGLE MAP CLASS COMPONENT
class CityImage extends Component {

	componentWillMount() {
		axios.get('https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/images/')
			.then((res) => {
				this.setState({ cityImage: res.data.photos[0].image.web })
				console.log(this.state.cityImage);
			});
	}

	render() {
		if (!this.state) {
			return <div>Loading...</div>
		}
		return(
			<div>{this.state.cityImage}</div>
		);
	}
}


// EXPORT GOOGLEMAP COMPONENT
export default CityImage;