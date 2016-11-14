import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.applyAllFilter = this.applyAllFilter.bind(this);
        this.applyActiveFilter = this.applyActiveFilter.bind(this);
        this.applyCompletedFilter = this.applyCompletedFilter.bind(this);
    }

    render() {
        const numComplete = this.props.todos.reduce((num, todo) => todo.completed ? num + 1 : num, 0);
        const numIncomplete = this.props.todos.length - numComplete;
        const countText = `${numIncomplete} ${numIncomplete === 1 ? 'item left' : 'items left'}`;
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{countText}</strong></span>
                <ul className="filters">
                    <li><a onClick={this.applyAllFilter}
                           className={this.props.filter === 'FILTER_ALL' ? 'selected' : null}>All</a></li>
                    <li><a onClick={this.applyActiveFilter}
                           className={this.props.filter === 'FILTER_ACTIVE' ? 'selected' : null}>Active</a></li>
                    <li><a onClick={this.applyCompletedFilter}
                           className={this.props.filter === 'FILTER_COMPLETED' ? 'selected' : null}>Completed</a></li>
                </ul>
                {numComplete > 0 &&
                    <button className="clear-completed" onClick={this.props.clearCompleted}>Clear completed</button>
                }
            </footer>
        );
    }

    applyAllFilter() {
        this.props.applyFilter('FILTER_ALL');
    }

    applyActiveFilter() {
        this.props.applyFilter('FILTER_ACTIVE');
    }

    applyCompletedFilter() {
        this.props.applyFilter('FILTER_COMPLETED');
    }
}

export default Footer;