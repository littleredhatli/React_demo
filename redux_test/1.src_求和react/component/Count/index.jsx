import React, { Component } from 'react'

export default class Count extends Component {
    state = {count : 0};

    increament = ()=> {
        const {count} = this.state;
        const add = this.selectValue.value;
        this.setState({count: count+add*1});
    }

    decreament = ()=> {
        const {count} = this.state;
        const add = this.selectValue.value;
        this.setState({count: count-add*1});
    }

    increamentIfOdd = ()=> {
        const {count} = this.state;
        const add = this.selectValue.value;
        if(count % 2 === 1){
            this.setState({count: count+add*1});
        }
    }

    increamentAscyn = ()=> {
        const {count} = this.state;
        const add = this.selectValue.value;
        setTimeout(()=> {
            this.setState({count: count+add*1});
        }, 500);
    }

    render() {
        return (
            <div>
                <h2>当前求和结果为：{this.state.count}</h2>
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
