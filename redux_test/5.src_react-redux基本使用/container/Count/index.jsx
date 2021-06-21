import Count from '../../component/Count';
import store from '../../redux/store';
import {connect} from 'react-redux'
import { decreamentAction, increamentAction, increamentAscynAction } from '../../redux/count_action';

//用于传递状态，返回一个对象
function mapStateToProps(state){
    return {count : state};
}

//用于传递操作状态的方法，返回一个对象
function mapDispatchToProps(dispatch){
    return {
        increament: data => dispatch(increamentAction(data)),
        decreament: data => dispatch(decreamentAction(data)),
        increamentAscyn: (data, time) => dispatch(increamentAscynAction(data, time))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)