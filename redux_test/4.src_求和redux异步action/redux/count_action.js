import {INCREAMENT, DECREAMENT} from './action_types'

export const increamentAction = data => ({type: INCREAMENT, data});
export const decreamentAction = data => ({type: DECREAMENT, data});

//异步action
export const increamentAscynAction = (data,time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increamentAction(data));
        }, time);
    }
}