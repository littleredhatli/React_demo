import React, {Component} from "react";
import Search from "./component/Search";
import List from './component/List';

export default class App extends Component{
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: false
  }

  updateState = (state) => {
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <Search updateState={this.updateState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
