// IMPORT AXIOS
import axios from 'axios';
// EXPORT TYPE VARIABLES
export const FETCH_CITIES = 'fetch_cities';
export const ADD_CITY = 'add_city';
export const CITY_WEATHER = 'city_weather';
export const DELETE_CITY = 'delete_city';
export const FETCH_WEATHER = 'fetch_weather';

// API KEYS FOR BACKEND DATABASE
const DB_API_KEY = '?key=AgencyWeatherApp1';
const DB_ROOT_URL = 'http://reduxblog.herokuapp.com/api';
// API KEYS FOR OPENWEATHERMAP
const W_API_KEY = '160f8a6730ce37a5842cab492fbe7e4d';
const W_ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${W_API_KEY}`

// FETCH LIST OF CITIES
export function fetchCities() {
	const request = axios.get(`${DB_ROOT_URL}/posts${DB_API_KEY}`);

	return {
		type: FETCH_CITIES,
		payload: request
	};
}

// ADD NEW CITY TO DATABASE/LIST
export function addCity(values, callback) {
	const cityNameArray = [];
	for (let word of values.title.split(' ')) {
		cityNameArray.push(word[0].toUpperCase() + word.slice(1));
	}
	values.title = cityNameArray.join(' ');

	const request = axios.post(`${DB_ROOT_URL}/posts${DB_API_KEY}`, values)
		.then(() => callback());

	return {
		type: ADD_CITY,
		payload: request
	};
}

// GET PAGE OF SPECIFIC CITY FOR WEATHER INFO
export function cityWeather(id) {
	const request = axios.get(`${DB_ROOT_URL}/posts/${id}${DB_API_KEY}`);

	return {
		type: CITY_WEATHER,
		payload: request
	}
}

// DELETE A CITY FOR DATABASE/LIST
export function deleteCity(id, callback) {
	const request = axios.delete(`${DB_ROOT_URL}/posts/${id}${DB_API_KEY}`)
		.then(() => callback());

	return {
		type: DELETE_CITY,
		payload: id
	}
}

// GET WEATHER INFORMATION FOR CITY PAGE
export function fetchWeather(city) {
	const request = axios.get(`${W_ROOT_URL}&q=${city},us`);
	
	return {
		type: FETCH_WEATHER,
		payload: request
	};
} 