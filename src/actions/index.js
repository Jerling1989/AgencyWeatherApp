import axios from 'axios';

export const FETCH_CITIES = 'fetch_cities';
export const ADD_CITY = 'add_city';
export const CITY_WEATHER = 'city_weather';
export const DELETE_CITY = 'delete_city';
export const FETCH_WEATHER = 'fetch_weather';


const DB_API_KEY = '?key=AgencyWeatherApp';
const DB_ROOT_URL = 'http://reduxblog.herokuapp.com/api';

const W_API_KEY = '66624f59050ed120cf48b86af2d1234d';
const W_ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${W_API_KEY}`

export function fetchCities() {
	const request = axios.get(`${DB_ROOT_URL}/posts${DB_API_KEY}`);

	return {
		type: FETCH_CITIES,
		payload: request
	};
}

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

export function cityWeather(id) {
	const request = axios.get(`${DB_ROOT_URL}/posts/${id}${DB_API_KEY}`);

	return {
		type: CITY_WEATHER,
		payload: request
	}
}

export function deleteCity(id, callback) {
	const request = axios.delete(`${DB_ROOT_URL}/posts/${id}${DB_API_KEY}`)
		.then(() => callback());

	return {
		type: DELETE_CITY,
		payload: id
	}
}

export function fetchWeather(city) {
	const request = axios.get(`${W_ROOT_URL}&q=${city},us`);
	
	return {
		type: FETCH_WEATHER,
		payload: request
	};
} 




