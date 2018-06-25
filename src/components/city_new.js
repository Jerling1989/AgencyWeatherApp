import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCity } from '../actions';

class CityNew extends Component {

	renderField(field) {
		const { meta: { touched, error } } = field;

		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input 
					autoComplete="off"
					className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">
					{field.meta.touched ? field.meta.error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		this.props.addCity(values, () => {
			this.props.history.push('/');
		});
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
				<Link to="/" className="btn btn-danger">Cancel</Link>
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
	connect(null, { addCity })(CityNew)
);





