import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../actions';

class CityIndex extends Component {
	componentDidMount() {
		this.props.fetchCities();
	}

	render() {
		return (
			<div>
				City Index
			</div>
		);
	}
}

export default connect(null, { fetchCities })(CityIndex);