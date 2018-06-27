// IMPORT REACT/REDUX DEPENDENCIES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// IMPORT LODASH
import _ from 'lodash';
// IMPORT ACTION CREATOR/COMPONENT
import { fetchCities } from '../actions';
import CityImage from './city_image';

// CREATE CITYINDEX COMPONENT
class CityIndex extends Component {
	componentDidMount() {
		this.props.fetchCities();
	}
	// RENDER CITIES HELPER FUNCTION
	renderCities() {
		return _.map(this.props.cities, city => {
			return (
				<li className="col s12 m6" key={city.id}>
					<Link id="back-link" to={`/city/${city.id}`}>
			      <CityImage name={city.title} />
					</Link>
				</li>
			);
		}).reverse();
	}
	// RENDER COMPONENT
	render() {
		return (
			<div>
				<div>
					{/* ADD NEW CITY TO DATABASE */}
					<Link className="btn-floating btn-large waves-effect waves-light teal" to="/city/new">
						<i className="material-icons">add</i>
					</Link>
				</div>
				<h3 className="center-align">Your Cities</h3>
				<p className="center-align">click on one of the city cards to view weather data</p>
				<ul className="row">
					{this.renderCities()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { cities: state.cities };
}

// EXPORT FUNCTION
export default connect(mapStateToProps, { fetchCities })(CityIndex);