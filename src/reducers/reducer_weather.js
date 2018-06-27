// IMPORT FECTH WEATHER VARIABLE
import { FETCH_WEATHER } from '../actions';

// CREATE REDUCER FUNCTION
export default function(state = [], action) {
	// CHECK FOR ACTION TYPE
	switch (action.type) {
		case FETCH_WEATHER:
			// CREATE NEW STATE ARRAY BY ADDING ACTION DATA INTO CURRENT STATE ARRAY
			return [ action.payload.data, ...state ];
	}

	// RETURN STATE
	return state;
}