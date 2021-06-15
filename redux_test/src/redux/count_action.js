import {INCREAMENT, DECREAMENT} from './action_types'

export const increamentAction = data => ({type: INCREAMENT, data});
export const decreamentAction = data => ({type: DECREAMENT, data});

//异步action,action的值为一个函数
export const increamentAscynAction = (data,time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increamentAction(data));
        }, time);
    }
}