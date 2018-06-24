import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../actions';

class CityIndex extends Component {
	componentDidMount() {
		this.props.fetchCities();
	}

	renderCities() {
		return _.map(this.props.cities, city => {
			return (
				<li className="list-group-item" key={city.id}>
					{city.title}
				</li>
			);
		});
	}

	render() {
		return (
			<div>
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