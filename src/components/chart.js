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
			<Sparklines height={60} data={props.data}>
				<SparklinesLine style={{ strokeWidth: 3, fill: "none" }} color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<br /><br /><br />
			<div>The Average {props.name} for the Next 5 Days Will Be: {average(props.data)} {props.units}</div>
		</div>
	);
}