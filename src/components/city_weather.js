// IMPORT REACT/REDUX
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
// IMPORT ACTION CREATORS
import { cityWeather, deleteCity, fetchWeather } from '../actions';
// IMPORT CHART COMPONENT
import Chart from './chart';

// CITYWEATHER COMPONENT
class CityWeather extends Component {
	componentWillMount() {
	  const { id } = this.props.match.params;
	  // CALL ACTION CREATOR TO GET NAME OF CITY FROM DATABASE
		this.props.cityWeather(id).then(() => {
			// USE CITYNAME TO SEARCH FOR WEATHER, SET DATA TO STATE
			this.props.fetchWeather(this.props.city.title).then((res) => {
				this.setState({ weather: res.payload.data });
			});
		});
	}

	// DELETE CITY FROM DATABASE/LIST
	onDeleteClick() {
		const { id } = this.props.match.params;
		this.props.deleteCity(id, () => {
			this.props.history.push('/');
		});
	}

	// RENDER COMPONENT
	render() {
		const { city } = this.props;
		// BEFORE DATA IS LOADED INTO COMPONENT
		if (!city || !this.state) {
			return <div>Loading...</div>
		}
		// STORE WEATHER DATA FOR CHART
		const temps = this.state.weather.list.map(weather => ((weather.main.temp - 273.15) * 1.8) + 32);
		const pressure = this.state.weather.list.map(weather => weather.main.pressure);
		const humidity = this.state.weather.list.map(weather => weather.main.humidity);

		return (
			<div>
				<Link to="/">Back to Homepage</Link>

				{/* DELETE POST BUTTON */}
				<button
					className="btn-floating btn-large waves-effect waves-light red"
					onClick={this.onDeleteClick.bind(this)}
				><i className="material-icons">delete</i>
				</button>

				<h3 className="center-align">{city.title} Weather Information</h3>
				<br />
				{/* ADD WEATHER DATA BELOW*/}
				<div>
					<div className="col s12 card z-depth-3 chart-card">
		        <div className="card-content white-text">
		        	<h5>5 Day Temperature Chart</h5>
		          <Chart name="Temperature" data={temps} color="white" units="&deg;F" />
		        </div>
		      </div>
					<br />

					<div className="col s12 card z-depth-3 chart-card">
		        <div className="card-content white-text">
		        	<h5>5 Day Pressure Chart</h5>
		          <Chart name="Pressure" data={pressure} color="white" units="hPa" />
		        </div>
		      </div>
					<br />

					<div className="col s12 card z-depth-3 chart-card">
		        <div className="card-content white-text">
		        	<h5>5 Day Humidity Chart</h5>
		          <Chart name="Humidity" data={humidity} color="white" units="%" />
		        </div>
		      </div>
					<br />
					
				</div>
			</div>
		);
	}
}

// BIND APP STATE PROPS TO COMPONENT
function mapStateToProps({ cities }, ownProps) {
	return { city: cities[ownProps.match.params.id] };
}
// EXPORT COMPONENT
export default connect(mapStateToProps, { cityWeather, deleteCity, fetchWeather })(CityWeather);