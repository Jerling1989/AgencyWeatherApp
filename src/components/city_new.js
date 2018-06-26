import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCity, fetchWeather } from '../actions';

class CityNew extends Component {

	renderField(field) {
		const { meta: { touched, error } } = field;

		return (
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

	onSubmit(values) {
		// this.props.fetchWeather(values.title);

		this.props.addCity(values, () => {
			this.props.history.push('/');
		});
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form autoComplete="off" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
			<h3 className="center-align">Add New City</h3>
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


function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = "Enter a City Name!";
	}

	return errors;
}


export default reduxForm({
	validate,
	form: 'CityNewForm'
})(
	connect(null, { addCity, fetchWeather })(CityNew)
);





