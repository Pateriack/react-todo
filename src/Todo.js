import React from 'react';

function Todo({id, text, completed, toggleTodo, destroyTodo}) {
    return (
        <li className={completed && "completed"}>
            <input type="checkbox"
                   className="toggle"
                   checked={completed}
                   onChange={() => toggleTodo(id)}
            />
            <label>{text}</label>
            <button className="destroy"
                    onClick={() => destroyTodo(id)}
            />
        </li>
    );
}

export default Todo;