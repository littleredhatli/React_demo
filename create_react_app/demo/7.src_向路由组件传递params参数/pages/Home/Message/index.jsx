import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import Detail from './Detail';

export default class Message extends Component {
    state = {messages: [
        {"id": "01", "title": "message001"},
        {"id": "02", "title": "message002"},
        {"id": "03", "title": "message003"}
    ]}
    render() {
        const {messages} = this.state;
        return (
            <div>
              <ul>
                {
                    messages.map(message => {
                        return (
                            <li key={message.id}>
                                {/* 向路由传递params参数 */}
                                <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>&nbsp;&nbsp;
                            </li>
                        )
                    })
                }
              </ul>
              <hr/>
              {/* Route中接收参数 */}
              <Route path="/home/message/detail/:id/:title" component={Detail}/>
            </div>    
        )
    }
}
