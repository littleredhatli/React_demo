const initState = 0;
export default function countReducer(preState=initState, action){
    const {type, data} = action;
    switch(type){
        case 'increament' : 
            return preState + data;
        case 'decreament' :
            return preState - data;
        default:
            return preState;
    }
}