// IMPORT OBJECTS AND METHODS
import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

// CREATE FUNCTION TO GET AVERAGES OF WEATHER DATA
function average(data) {
	return _.round(_.sum(data)/data.length);
}

// CREATE FUNCTIONAL COMPONENT
export default (props) => {
	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	);
}