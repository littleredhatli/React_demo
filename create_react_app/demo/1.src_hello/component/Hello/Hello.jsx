import React, {Component} from "react";
import Hello from "./index.module.css"

export default class App extends Component{
  render(){
    return(
      <h1 className={Hello.title}>Hello, React!</h1>
    )
  }
}
