import React, { Component } from 'react';
import store from '../../redux/store';
import {connect} from 'react-redux'
import { decreamentAction, increamentAction, increamentAscynAction } from '../../redux/actions/count';

class Count extends Component {
    increament = ()=> {
        const add = this.selectValue.value;
        this.props.increament(add*1);
    }

    decreament = ()=> {
        const add = this.selectValue.value;
        this.props.decreament(add*1);
    }

    increamentIfOdd = ()=> {
        const add = this.selectValue.value;
        const count = store.getState();
        if(this.props.count % 2 === 1){
            this.props.increament(add*1);
        }
    }

    increamentAscyn = ()=> {
        const add = this.selectValue.value;
        this.props.increamentAscyn(add*1, 500);
    }

    render() {
        return (
            <div>
                <h2>Count组件，下一个组件的人数为：{this.props.len}</h2>
                <h2>当前求和结果为：{this.props.count}</h2>
                <select ref={e => this.selectValue = e}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>&nbsp;
                <button onClick={this.increament}>+</button>&nbsp;
                <button onClick={this.decreament}>-</button>&nbsp;
                <button onClick={this.increamentIfOdd}>奇数加</button>&nbsp;
                <button onClick={this.increamentAscyn}>异步加</button>
            </div>
        )
    }
}

//用于传递状态，返回一个对象
// function mapStateToProps(state){
//     return {count : state};
// }

//用于传递操作状态的方法，返回一个对象
// function mapDispatchToProps(dispatch){
//     return {
//         increament: data => dispatch(increamentAction(data)),
//         decreament: data => dispatch(decreamentAction(data)),
//         increamentAscyn: (data, time) => dispatch(increamentAscynAction(data, time))
//     }
// }

export default connect(
    state => ({count: state.count, len: state.person.length}), 
    {
        increament: increamentAction,
        decreament: decreamentAction,
        increamentAscyn: increamentAscynAction
    })(Count)