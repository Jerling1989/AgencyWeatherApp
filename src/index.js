import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import CityIndex from './components/city_index';
import CityNew from './components/city_new';
import CityWeather from './components/city_weather';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		<Switch>
    			<Route path="/city/new" component={CityNew} />
    			<Route path="/city/:id" component={CityWeather} />
		    	<Route path="/" component={CityIndex} />
	    	</Switch>
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
