import React, { Component } from 'react';
import ReactDom from 'react-dom'

/* class Demo extends Component {
    state = {count : 0}

    handleAdd = ()=> {
        this.setState(state => ({count: state.count+1}));
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState(state => ({count: state.count+1}));
        }, 1000);
    }

    unmount = () => {
        ReactDom.unmountComponentAtNode(document.getElementById('root'));
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{this.state.count}</h2>
                <button onClick={this.handleAdd}>点击+1</button>
                <button onClick={this.unmount}>卸载组件</button>
            </div>
        )
    }
}
*/


function Demo(){
    const [count, setCount] = React.useState(0);

    function handleAdd(){
        //setCount(count+1); //setCount写法1: setXxx(newValue)
        setCount(count => count+1); //setCount写法2: setXxx(value => newValue)
    }

    function unmount(){
        ReactDom.unmountComponentAtNode(document.getElementById('root'));
    }

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count+1);
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <div>
            <h2>当前求和为：{count}</h2>
            <button onClick={handleAdd}>点击+1</button>
            <button onClick={unmount}>卸载组件</button>
        </div>
    )
}

export default Demo;