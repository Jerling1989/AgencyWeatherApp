import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import CityIndex from './components/city_index';
import CityNew from './components/city_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		Header
	    	<Route path="/" component={CityIndex} />
	    	<Route path="/city/new" component={CityNew} />
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
