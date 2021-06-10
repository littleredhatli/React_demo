import React, { Component } from 'react';
import "./index.css";
import PubSub from 'pubsub-js'

export default class Search extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: false
  }

  componentDidMount(){
    this.token = PubSub.subscribe('searchState', (msg, data) => {
      this.setState(data);
    })
  }

  componentWillUnmount()
  {
    PubSub.unsubscribe(this.token);
  }

  render() {
    const {users, isFirst, isLoading, err} = this.state;

    return (
      <div className="row">
        {
          isFirst? <h2>请输入关键字</h2> :
          isLoading? <h2>Loading...</h2> :
          err? <h2>{err}</h2> :
          users.map(user => {
            return (
              <div key={user.id} className="card">
                <a rel="noreferrer" href={user.html_url} target="_blank">
                  <img alt="head_photo" src={user.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
