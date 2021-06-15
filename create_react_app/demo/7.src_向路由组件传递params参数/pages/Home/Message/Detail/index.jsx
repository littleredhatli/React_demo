import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        const data = [
            {"id": "01", "content": "消息1详情"},
            {"id": "02", "content": "消息2详情"},
            {"id": "03", "content": "消息3详情"}
        ]

        const {id, title} = this.props.match.params;
        const mes = data.find(m => {
            return m.id == id;
        });
        return (
			<ul>
				<li>ID:{id}</li>
				<li>TITLE:{title}</li>
				<li>CONTENT:{mes.content}</li>
			</ul>
		)
    }
}
