// 暴露一个store对象

import {applyMiddleware, combineReducers, createStore} from 'redux';
import countReducer from './reducers/count';
import personReducer from './reducers/person';
import thunk from 'redux-thunk'

const allReducers = combineReducers({
    count : countReducer, 
    person: personReducer
})
export default createStore(allReducers, applyMiddleware(thunk));