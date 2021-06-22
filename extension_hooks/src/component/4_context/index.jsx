import React, { Component } from 'react';
import './index.css'

//Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据；
//主要应用场景在于很多不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差。

const ContextA = React.createContext();
const {Provider, Consumer} = ContextA;
export default class A extends Component {
    state = {username: 'tom', age: '18'};
    render() {
        const {username, age} = this.state;
        return (
            <div className='classA'>
                <h3>组件A</h3>
                <h3>A组件state用户名为{username},年龄为{age}</h3>
                <Provider value={{username,age}}>
                    <B/>
                </Provider>
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className='classB'>
                <h3>组件B</h3>
                <C/>
            </div>
        )
    }
}

/* class C extends Component {
    static contextType = ContextA;
    render() {
        const {username, age} = this.context;
        return (
            <div className='classC'>
                <h3>组件C</h3>
                <h3>从A组件接收到的用户名为{username},年龄为{age}</h3>
            </div>
        )
    }
}
*/

function C(){
    return (
        <div className='classC'>
            <h3>组件C</h3>
            <h3>从A组件接收到的用户名为
            {/* 函数式组件需要借助Consumer */}
            <Consumer>
                {
                    value => `${value.username},年龄为${value.age}`
                }
            </Consumer>
            </h3>
        </div>
    )
}
