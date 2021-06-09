import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.css"

export default class Footer extends Component {
    static propTypes = {
      todos: PropTypes.array.isRequired
    }

    handleCheackAll = (done) => {
      this.props.checkAll(done);
    }

    handleClearDone = () => {
      this.props.clearDone();
    }

    render() {
        const {todos} = this.props;
        const doneCount = todos.reduce((pre, cur) => {
          return pre + (cur.done? 1 : 0)
        }, 0);
        const total = todos.length;

        return (
            <div className="todo-footer">
              <label>
                <input type="checkbox" onChange={e => this.handleCheackAll(e.target.checked)} checked={doneCount==total && total!=0? true:false}/>
              </label>
              <span>
                <span>已完成{doneCount}</span> / 全部{total}
              </span>
              <button className="btn btn-danger" onClick={this.handleClearDone}>清除已完成任务</button>
            </div>
        )
    }
}
