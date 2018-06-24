import { combineReducers } from 'redux';
import CityReducer from './reducer_cities';

const rootReducer = combineReducers({
  cities: CityReducer
});

export default rootReducer;
