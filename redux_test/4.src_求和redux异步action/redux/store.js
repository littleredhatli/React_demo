// 暴露一个store对象

import {applyMiddleware, createStore} from 'redux';
import countReducer from './count_reducer'
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk));