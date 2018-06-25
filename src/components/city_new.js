import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class CityNew extends Component {

	renderField(field) {
		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input 
					autocomplete="off"
					className="form-control"
					type="text"
					{...field.input}
				/>
			</div>
		);
	}

	render() {
		return (
			<form>
				<Field
					label="City Name"
					name="title"
					component={this.renderField}
				/>
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
})(CityNew);