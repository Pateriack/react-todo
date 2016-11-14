import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.destroyTodo = this.destroyTodo.bind(this);
    }

    render() {
        return (
            <li className={this.props.completed && "completed"}>
                <input type="checkbox"
                       className="toggle"
                       checked={this.props.completed}
                       onChange={this.toggleTodo} />
                <label>{this.props.text}</label>
                <button className="destroy"
                        onClick={this.destroyTodo} />
            </li>
        );
    }

    toggleTodo() {
        this.props.toggleTodo(this.props.id);
    }

    destroyTodo() {
        this.props.destroyTodo(this.props.id);
    }
}

export default Todo;