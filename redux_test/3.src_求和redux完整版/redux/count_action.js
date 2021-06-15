import {INCREAMENT, DECREAMENT} from './action_types'

export const increamentAction = data => ({type: INCREAMENT, data});
export const decreamentAction = data => ({type: DECREAMENT, data});