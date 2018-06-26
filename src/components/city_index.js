import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCities } from '../actions';

class CityIndex extends Component {
	componentDidMount() {
		this.props.fetchCities();
	}

	renderCities() {
		return _.map(this.props.cities, city => {
			return (
				<li className="list-group-item" key={city.id}>
					<Link to={`/city/${city.id}`}>
						{city.title}
					</Link>
				</li>
			);
		}).reverse();
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/city/new">
						Add a City
					</Link>
				</div>
				<h3>Cities</h3>
				<ul className="list-group">
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