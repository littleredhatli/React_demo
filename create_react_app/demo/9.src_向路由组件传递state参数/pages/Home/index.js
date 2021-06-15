import React, { Component } from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import Message from './Message';
import News from './News'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>Home</h3>
                <ul className="nav nav-tabs">
                <li>
                    <NavLink className="list-group-item" to="/home/news">News</NavLink>
                </li>
                <li>
                    <NavLink className="list-group-item" to="/home/message">Message</NavLink>
                </li>
                </ul>
                <div>
                    <Switch>
                        <Route path="/home/news" component={News}/>
                        <Route path="/home/message" component={Message}/>
                    </Switch>
                </div>
            </div>
        )
    }
}
