import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CityReducer from './reducer_cities';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  cities: CityReducer,
  form: formReducer
  // weather: WeatherReducer
});

export default rootReducer;
