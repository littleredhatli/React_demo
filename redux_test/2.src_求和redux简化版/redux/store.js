// 暴露一个store对象

import {createStore} from 'redux';
import countReducer from './count_reducer'

export default createStore(countReducer);