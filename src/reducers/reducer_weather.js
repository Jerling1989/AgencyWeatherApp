import { FETCH_WEATHER } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		
		case FETCH_WEATHER:
			return { ...state, [action.payload.data.id]: action.payload.data };
	}

	return state;
}