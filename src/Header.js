import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {value: ''};
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="new-todo"
                           placeholder="What needs to be done?"
                           value={this.state.value}
                           onChange={this.handleChange} />
                </form>
            </header>
        );
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.value);
        this.setState({value: ''});
    }
}

export default Header;