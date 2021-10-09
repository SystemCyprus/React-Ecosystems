import React from 'react';

const TodoListItem = ({ props }) => (
    <div className="todo-item-container">
        <h3>{TodoListItem.text}</h3>
        <div className="buttons-container">
            <button className="completed-button">Mark As Completed</button>
            <button className="remove-button">Remove</button>
        </div>
        <button>Remove</button>
    </div>
);

export default TodoListItem;