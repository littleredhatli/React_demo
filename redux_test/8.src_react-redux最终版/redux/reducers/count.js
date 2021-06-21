import {INCREAMENT, DECREAMENT} from '../action_types'

const initState = 0;
export default function countReducer(preState=initState, action){
    const {type, data} = action;
    switch(type){
        case INCREAMENT : 
            return preState + data;
        case DECREAMENT :
            return preState - data;
        default:
            return preState;
    }
}