import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCities } from '../actions';

import CityImage from './city_image';

class CityIndex extends Component {
	componentDidMount() {
		this.props.fetchCities();
	}

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

	render() {
		return (
			<div>
				<div className="">
					<Link className="btn-floating btn-large waves-effect waves-light teal" to="/city/new">
						<i className="material-icons">add</i> {/*Add a City*/}
					</Link>
				</div>
				<h3 className="center-align">Your Cities</h3>
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

export default connect(mapStateToProps, { fetchCities })(CityIndex);