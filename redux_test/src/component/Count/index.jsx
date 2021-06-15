import React, { Component } from 'react';
import store from '../../redux/store';
import {increamentAction, decreamentAction} from '../../redux/count_action'

export default class Count extends Component {
    increament = ()=> {
        const add = this.selectValue.value;
        store.dispatch(increamentAction(add*1));
    }

    decreament = ()=> {
        const add = this.selectValue.value;
        store.dispatch(decreamentAction(add*1));
    }

    increamentIfOdd = ()=> {
        const add = this.selectValue.value;
        const count = store.getState();
        if(count % 2 === 1){
            store.dispatch(increamentAction(add*1));
        }
    }

    increamentAscyn = ()=> {
        const add = this.selectValue.value;
        setTimeout(()=> {
            store.dispatch(increamentAction(add*1));
        }, 500);
    }

    render() {
        return (
            <div>
                <h2>当前求和结果为：{store.getState()}</h2>
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
