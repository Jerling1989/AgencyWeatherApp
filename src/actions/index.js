import axios from 'axios';

export const FETCH_CITIES = 'fetch_cities';
export const ADD_CITY = 'add_city';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=AgencyWeatherApp';

export function fetchCities() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_CITIES,
		payload: request
	};
}

export function addCity(values) {
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

	return {
		type: ADD_CITY,
		payload: request
	};
}