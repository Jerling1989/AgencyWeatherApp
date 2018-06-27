import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CityReducer from './reducer_cities';

const rootReducer = combineReducers({
  cities: CityReducer,
  form: formReducer
});

export default rootReducer;
