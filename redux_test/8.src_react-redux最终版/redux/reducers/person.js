import {ADDPERSON} from '../action_types'

const initPerson = [{id:'01', name: 'tom', age: '18'}];
export default function personReducer(preState=initPerson, action){
    const {type, data} = action;
    switch(type){
        case ADDPERSON:
            return [data, ...preState];
        default:
            return preState; 
    }
}