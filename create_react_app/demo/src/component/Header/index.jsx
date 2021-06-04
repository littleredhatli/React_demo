import React, { Component } from 'react';
import {nanoid} from 'nanoid';
import "./index.css"

export default class Header extends Component {
    handleInput = (event) => {
        if(event.keyCode !== 13) return;
        if(event.target.value.trim() == ''){
            alert("输入不能为空")
            return;
        }

        const todoObj = {'id': nanoid(), 'name': event.target.value, 'done': false};
        this.props.addTodo(todoObj);

        event.target.value = "";
    }

    render() {
        return (
            <div className="todo-header">
              <input onKeyUp={this.handleInput} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
