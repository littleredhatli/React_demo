// 用于汇总所有reducer为一个总的reducer

import {combineReducers} from 'redux';
import countReducer from './count';
import personReducer from './person';

export default combineReducers({
    count : countReducer, 
    person: personReducer
})