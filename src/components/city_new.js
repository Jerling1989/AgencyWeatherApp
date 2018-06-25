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

export default reduxForm({
	form: 'CityNewForm'
})(CityNew);