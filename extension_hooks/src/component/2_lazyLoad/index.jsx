import React, {Component, lazy, Suspense} from "react";
import {Route, Redirect, NavLink, Switch} from "react-router-dom";
import Loading from "./component/Loading";

const Home = lazy(() => import('./component/Home'));
const About = lazy(() => import('./component/About'));

export default class Demo extends Component{
  render(){
    return(
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <h2>导航栏</h2>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Suspense fallback={<Loading/>}>
                  <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                    <Redirect to="/about"/>
                  </Switch>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}