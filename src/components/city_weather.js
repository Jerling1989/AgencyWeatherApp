import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cityWeather } from '../actions'; 

class CityWeather extends Component {
	componentDidMount() {
	  const { id } = this.props.match.params.id;
		this.props.cityWeather(id);
	}

	render() {
		return (
			<div>
				City Weather
			</div>
		);
	}
}

function mapStateToProps({ cities }, ownProps) {
	return { city: cities[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { cityWeather })(CityWeather);