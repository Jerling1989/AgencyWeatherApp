import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { cityWeather, deleteCity, fetchWeather } from '../actions';


class CityWeather extends Component {
	componentWillMount() {
	  const { id } = this.props.match.params;
		this.props.cityWeather(id).then(() => {
			// console.log(this.props.city.title)
			this.props.fetchWeather(this.props.city.title).then((res) => {
				this.setState({ weather: res.payload.data });
				// console.log(this.state.weather);
			});
		});
	}

	onDeleteClick() {
		const { id } = this.props.match.params;
		this.props.deleteCity(id, () => {
			this.props.history.push('/');
		});
	}

	render() {
		const { city } = this.props;

		if (!city || !this.state) {
			return <div>Loading...</div>
		}

		console.log(this.state.weather);
		// console.log(population);
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
				<h5>{this.state.weather.city.population}</h5>
			</div>
		);
	}
}

function mapStateToProps({ cities }, ownProps) {
	return { city: cities[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { cityWeather, deleteCity, fetchWeather })(CityWeather);