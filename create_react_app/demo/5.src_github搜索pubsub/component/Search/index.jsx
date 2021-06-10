import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js'

export default class Search extends Component {
    handleSearch = () => {
      const {keywordElement: {value: keyword}} = this;
      PubSub.publish('searchState', {isFirst: false, isLoading: true});
      axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
        response => {
          PubSub.publish('searchState', {isLoading: false, users: response.data.items});
        },
        error => {PubSub.publish('searchState', {isLoading: false, err: error.message})}
      );  
    }

    render() {
        return (
          <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
              <input ref={e => this.keywordElement=e} type="text" placeholder="enter the name you search"/>&nbsp;<button onClick={this.handleSearch}>Search</button>
            </div>
          </section>
        )
    }
}