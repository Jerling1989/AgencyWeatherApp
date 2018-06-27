// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
import axios from 'axios';


// CREATE GOOGLE MAP CLASS COMPONENT
class CityImage extends Component {

	componentWillMount() {
		const search = this.props.name.replace(/[^\w]/g,'-').toLowerCase();
		axios.get(`https://api.teleport.org/api/urban_areas/slug:${search}/images/`)
			.then((res) => {
				this.setState({ cityImage: res.data.photos[0].image.web })
			});
	}

	render() {
		if(!this.state) {
			return <div>Loading...</div>
		}

		return(
			
			<div className="card z-depth-3 city-index">
				<div class="card-image waves-effect waves-block waves-light">
		      <img class="activator" src={this.state.cityImage} />
		    </div>
        <div className="card-content white-text">
          <span className="center-align card-title">{this.props.name}</span>
        </div>
      </div>
		);
	}
}


// EXPORT GOOGLEMAP COMPONENT
export default CityImage;