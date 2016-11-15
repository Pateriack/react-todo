import React, { Component } from 'react';

import Todo from './Todo';
import { allCompleted } from './App';

class TodoList extends Component {
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
                       checked={allCompleted(this.props.todos)}
                       onChange={this.props.toggleAll} />
                <ul className="todo-list">
                    {todos}
                </ul>
            </section>
        );
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