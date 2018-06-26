import _ from 'lodash';
import { FETCH_CITIES, CITY_WEATHER, DELETE_CITY } from '../actions';

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