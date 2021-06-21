// 暴露一个store对象

import {applyMiddleware, createStore} from 'redux';

import allReducers from './reducers/index';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));