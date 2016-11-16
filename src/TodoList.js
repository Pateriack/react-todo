import React from 'react';

import Todo from './Todo';
import { allCompleted } from './App';

function TodoList ({todos, filter, toggleTodo, destroyTodo, toggleAll}) {
    const children = todos.filter(getFilter(filter)).map((todo) =>
        <Todo key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              destroyTodo={destroyTodo}
        />
    );
    return (
        <section className="main">
            <input type="checkbox"
                   className="toggle-all"
                   checked={allCompleted(todos)}
                   onChange={toggleAll} />
            <ul className="todo-list">
                {children}
            </ul>
        </section>
    );
}

export default TodoList;

function getFilter(filter) {
    switch(filter) {
        case 'FILTER_ACTIVE':
            return todo => !todo.completed;

        case 'FILTER_COMPLETED':
            return todo => todo.completed;

        default:
            return todo => true;

    }
}