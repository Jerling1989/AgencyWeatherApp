import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class CityNew extends Component {

	renderField(field) {
		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input 
					autoComplete="off"
					className="form-control"
					type="text"
					{...field.input}
				/>
				{field.meta.touched ? field.meta.error : ''}
			</div>
		);
	}

	onSubmit(values) {
		console.log(values);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="City Name"
					name="title"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
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