import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js'

export default class Search extends Component {
    handleSearch = async () => {
      const {keywordElement: {value: keyword}} = this;
      PubSub.publish('searchState', {isFirst: false, isLoading: true});
      try{
        const response = await fetch(`https://api.github.com/search/users?q=${keyword}`);
        const data = await response.json();
        PubSub.publish('searchState', {isLoading: false, users: data.items}); 
      }catch(error){
        PubSub.publish('searchState', {isLoading: false, err: error.message});
      }  
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