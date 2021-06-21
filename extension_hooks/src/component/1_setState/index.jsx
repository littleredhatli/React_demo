import React, { Component } from 'react'

export default class Demo extends Component {
    state = {count : 0}

    handleAdd = () => {
        /* //对象式的setState：函数式的语法糖
        const {count} = this.state;
        this.setState({count: count+1});
        */

        //函数式的setState
        //函数式setState可以直接接收到state和props，不需要通过this.state获取
        this.setState((state, props) => {
            return {count: state.count+1};
        })
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{this.state.count}</h2>
                <button onClick={this.handleAdd}>点击+1</button>
            </div>
        )
    }
}
