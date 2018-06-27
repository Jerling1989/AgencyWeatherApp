// IMPORT REACT/REDUX DEPENDENCIES
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// IMPORT ACTION CREATORS
import { addCity, fetchWeather } from '../actions';

// CREATE CITYNEW COMPONENT
class CityNew extends Component {
	// RENDERFIELD HELPER FUNCTION
	renderField(field) {
		const { meta: { touched, error } } = field;

		return (
			// FORM TEMPLATE/LAYOUT
			<div className="input-field">
				<label>{field.label}</label>
				<i className="material-icons prefix">{field.icon}</i>
				<input 
					placeholder={field.placeholder}
					type="text"
					{...field.input}
				/>
				<div className="red-text">
					{touched ? error : ''}
				</div>
			</div>
		);
	}
	// ONSUBMIT FUNCTION
	onSubmit(values) {
		this.props.addCity(values, () => {
			this.props.history.push('/');
		});
	}

	// RENDER COMPONENT
	render() {
		const { handleSubmit } = this.props;

		return (
			// ADD NEW CITY FORM
			<form autoComplete="off" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
			<h3 className="center-align">Add New City</h3>
			<div className="center-align">
				<img id="add-city" className="responsive-img" src="../../img/add_city.png" />
			</div>
				<Field
					icon="location_city"
					placeholder="City Name"
					name="title"
					component={this.renderField}
				/>
				<button type="submit" className="waves-effect waves-light btn teal">Submit</button>
				<Link to="/" className="waves-effect waves-light btn red">Cancel</Link>
			</form>
		);
	}
}

// VALIDATE FROM ENTRY
function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = "Enter a City Name!";
	}
	return errors;
}

// EXPORT COMPONENT
export default reduxForm({
	validate,
	form: 'CityNewForm'
})(
	connect(null, { addCity, fetchWeather })(CityNew)
);