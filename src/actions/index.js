import axios from 'axios';

export const FETCH_CITIES = 'fetch_cities';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=AgencyWeatherApp';

export function fetchCities() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_CITIES,
		payload: request
	};
}