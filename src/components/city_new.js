import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class CityNew extends Component {

	renderField(field) {
		return (
			<div>
				<input 
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
					name="title"
					Component={this.renderField}
				/>
			</form>
		);
	}
}

export default reduxForm({
	form: 'CityNewForm'
})(CityNew);