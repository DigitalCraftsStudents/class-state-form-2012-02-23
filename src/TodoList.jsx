import React from 'react';

class TodoList extends React.Component {

    render () {
        return (
            <ul>
                {this.props.todos.map((t, index) => (
                    <li key={index}>{t.todo} : {t.why}</li>
                ))}
            </ul>
        );
    }
}

export default TodoList;