import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { cityWeather, deleteCity } from '../actions';

class CityWeather extends Component {
	componentDidMount() {
	  const { id } = this.props.match.params;
		this.props.cityWeather(id);
	}

	onDeleteClick() {
		const { id } = this.props.match.params;
		this.props.deleteCity(id, () => {
			this.props.history.push('/');
		});
	}

	render() {
		const { city } = this.props;

		if (!city) {
			return <div>Loading...</div>
		}

		return (
			<div>
				<Link to="/">Back to Homepage</Link>
				<button
					className="btn-floating btn-large waves-effect waves-light red"
					onClick={this.onDeleteClick.bind(this)}
				>
					<i className="material-icons">delete</i>
				</button>
				<h3 className="center-align">{city.title}</h3>
			{/* ADD WEATHER DATA BELOW*/}
			</div>
		);
	}
}

function mapStateToProps({ cities }, ownProps) {
	return { city: cities[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { cityWeather, deleteCity })(CityWeather);