import React, { Component } from 'react';
import {nanoid} from 'nanoid';
import {connect} from 'react-redux';
import {personAction} from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        const username = this.username.value;
        const age = this.age.value;
        const obj = {id:nanoid(), name: username, age};
        this.props.personAction(obj);
    }

    render() {
        return (
            <div>
                <h2>Person组件，上一个组件和为：{this.props.count}</h2>
                姓名：<input ref={e => this.username=e} type="text"/>
                年龄：<input ref={e => this.age=e} type="text"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.person.map(p => {
                            return <li key={p.id}>{p.name}--{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({person: state.person, count: state.count}),
    {personAction}
)(Person)