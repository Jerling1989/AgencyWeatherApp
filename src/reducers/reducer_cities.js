// IMPORT LODASH
import _ from 'lodash';
// IMPORT TYPE VARIABLES
import { FETCH_CITIES, CITY_WEATHER, DELETE_CITY } from '../actions';

// CREATE POSTSREDUCER
export default function(state = {}, action) {
	switch (action.type) {

		case DELETE_CITY:
			return _.omit(state, action.payload);

		case CITY_WEATHER:
			return { ...state, [action.payload.data.id]: action.payload.data };

		case FETCH_CITIES:
			return _.mapKeys(action.payload.data, 'id');

		default:
			return state;
	}
}