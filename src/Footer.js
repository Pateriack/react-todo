import React from 'react';

function Footer ({todos, filter, applyFilter, clearCompleted}) {
    const numComplete = todos.reduce((num, todo) => todo.completed ? num + 1 : num, 0);
    const numIncomplete = todos.length - numComplete;
    const countText = `${numIncomplete} ${numIncomplete === 1 ? 'item left' : 'items left'}`;
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{countText}</strong></span>
            <ul className="filters">
                <li><a onClick={() => applyFilter('FILTER_ALL')}
                       className={filter === 'FILTER_ALL' ? 'selected' : null}>All</a></li>
                <li><a onClick={() => applyFilter('FILTER_ACTIVE')}
                       className={filter === 'FILTER_ACTIVE' ? 'selected' : null}>Active</a></li>
                <li><a onClick={() => applyFilter('FILTER_COMPLETED')}
                       className={filter === 'FILTER_COMPLETED' ? 'selected' : null}>Completed</a></li>
            </ul>
            {numComplete > 0 &&
                <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
            }
        </footer>
    );
}

export default Footer;