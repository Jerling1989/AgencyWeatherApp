// IMPORT REACT/REDUX DEPENDENCIES
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// IMPORT REDUCER
import CityReducer from './reducer_cities';

// CREATE ROOTREDUCER
const rootReducer = combineReducers({
  cities: CityReducer,
  form: formReducer
});

// EXPORT ROOTREDUCER
export default rootReducer;
