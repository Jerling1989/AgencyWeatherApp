// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
import axios from 'axios';


// CREATE GOOGLE MAP CLASS COMPONENT
class CityImage extends Component {
	componentWillMount() {
		// REPLACE SPACES WITH HYPHENS AND LOWERCASE STR THEN SEARCH FOR IMG
		const search = this.props.name.replace(/[^\w]/g,'-').toLowerCase();
		axios.get(`https://api.teleport.org/api/urban_areas/slug:${search}/images/`)
			.then((res) => {
				// ADD IMG SEARCH RES TO STATE
				this.setState({ cityImage: res.data.photos[0].image.web })
			});
	}

	// RENDER COMPONENT
	render() {
		// IF THERE IS NO DATA YET DISPLAY LOADING MSG
		if(!this.state) {
			return <div>Loading...</div>
		}

		return(
			<div className="card z-depth-3 city-index">
				<div class="card-image waves-effect waves-block waves-light">
					{/* CITY IMAGE TAG */}
		      <img class="activator" src={this.state.cityImage} />
		    </div>
        <div className="card-content white-text">
        	{/* CITY NAME */}
          <span className="center-align card-title">{this.props.name}</span>
        </div>
      </div>
		);
	}
}

// EXPORT COMPONENT
export default CityImage;