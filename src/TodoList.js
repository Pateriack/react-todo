import React, { Component } from 'react';

import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.toggleAll = this.toggleAll.bind(this);
    }

    render() {
        const todos = filterTodos(this.props.todos, this.props.filter).map((todo) =>
            <Todo key={todo.id}
                  {...todo}
                  toggleTodo={this.props.toggleTodo}
                  destroyTodo={this.props.destroyTodo} />
        );
        return (
            <section className="main">
                <input type="checkbox"
                       className="toggle-all"
                       checked={this.allCompleted()}
                       onChange={this.toggleAll} />
                <ul className="todo-list">
                    {todos}
                </ul>
            </section>
        );
    }

    allCompleted() {
        return this.props.todos.length > 0 && this.props.todos.reduce((result, todo) => todo.completed ? result : false, true);
    }

    toggleAll(e) {
        console.log(e.target.value);
    }
}

export default TodoList;

function filterTodos(todos, filter) {
    switch(filter) {
        case 'FILTER_ACTIVE':
            return todos.filter(todo => !todo.completed);
        case 'FILTER_COMPLETED':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
}