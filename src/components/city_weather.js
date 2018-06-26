import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { cityWeather } from '../actions';

class CityWeather extends Component {
	componentDidMount() {
	  const { id } = this.props.match.params;
		this.props.cityWeather(id);
	}

	render() {
		const { city } = this.props;

		if (!city) {
			return <div>Loading...</div>
		}

		return (
			<div>
				<Link to="/">Back to Homepage</Link>
				<h2>{city.title}</h2>
			</div>
		);
	}
}

function mapStateToProps({ cities }, ownProps) {
	return { city: cities[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { cityWeather })(CityWeather);