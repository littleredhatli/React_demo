import React, {Component} from "react";
import Header from "./component/Header";
import List from "./component/List";
import Footer from './component/Footer'
import "./App.css"

export default class App extends Component{
  //状态在哪里，修改状态的方法就在哪里
  state = {todos:
    [
      {'id': 1, 'name': 'Todo1', done: false},
      {'id': 2, 'name': 'Todo2', done: false},
      {'id': 3, 'name': 'Todo3', done: true},
      {'id': 4, 'name': 'Todo4', done: false}
    ]
  }

  //添加一个todoList
  addTodo = (todoObj) => {
    const {todos} = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({todos: newTodos});
  }

  //更新todo是否完成的状态
  updateTodo = (id, done) => {
    const {todos} = this.state;
    const newTodos = todos.map(todo => {
      if(todo.id == id) return {...todo, done};
      else return todo;
    });
    this.setState({todos: newTodos});
  }

  //删除一条todoList
  deleteTodo = (id) => {
    const {todos} = this.state;
    const newTodos = todos.filter(todo => {
      return todo.id !== id;
    })  
    this.setState({todos: newTodos});
  }

  checkAll = (done) => {
    const {todos} = this.state;
    const newTodos = todos.map(todo => {
      return {...todo, done}
    })
    this.setState({todos: newTodos});
  }

  clearDone = () => {
    const {todos} = this.state;
    const newTodos = todos.filter(todo => {
      return !todo.done;
    })
    this.setState({todos: newTodos});
  }

  render(){
    const {todos} = this.state;

    return(
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} checkAll={this.checkAll} clearDone={this.clearDone}/>
          </div>
        </div>
      </div>
    )
  }
}

//不使用其他组件通讯方式，state放在App父组件中，父组件通过props向子组件传递数据
//子组件通过调用父组件准备好的函数（函数放入props）向父组件传递数据，具体见 App.js:addTodo()函数, Header index.js:this.props.addTodo(数据)