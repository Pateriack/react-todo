import React, { Component } from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

const INITIAL_STATE = {
    todos: [],
    filter: 'FILTER_ALL'
};

var nextId = 0;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
        this.clearCompleted = this.clearCompleted.bind(this);
        this.applyFilter = this.applyFilter.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.destroyTodo = this.destroyTodo.bind(this);
    }

    render() {
        return (
            <div className="todoapp">
                <Header addTodo={this.addTodo} />
                <TodoList {...this.state}
                          toggleTodo={this.toggleTodo}
                          destroyTodo={this.destroyTodo} />
                <Footer {...this.state}
                        clearCompleted={this.clearCompleted}
                        applyFilter={this.applyFilter} />
            </div>
        )
    }

    clearCompleted() {
        this.setState({todos: this.state.todos.filter(todo => !todo.completed)});
    }

    applyFilter(filter) {
        this.setState({filter: filter});
    }

    toggleTodo(id) {
        let todos = this.state.todos
            .map(todo => Object.assign({}, todo, {completed: (todo.id === id) ? !todo.completed : todo.completed}));
        this.setState({todos: todos});
    }

    addTodo(text) {
        let todo = {
            id: nextId,
            text: text,
            completed: false
        };
        nextId++;
        this.setState({todos: [...this.state.todos, todo]});
    }

    destroyTodo(id) {
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
    }
}

export default App;