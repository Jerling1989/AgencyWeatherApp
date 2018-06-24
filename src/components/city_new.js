import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class CityNew extends Component {
	render() {
		return (
			<form>
				<Field
					name="title"
					Component={}
				/>
			</form>
		);
	}
}

export default reduxForm({
	form: 'CityNewForm'
})(CityNew);