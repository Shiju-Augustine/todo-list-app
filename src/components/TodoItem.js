import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} title={todo.completed ? 'Mark as pending' : 'Mark as completed'} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <div className="status">
                {todo.completed ? <span className="completed-status">Completed</span> : <span className="pending-status">Pending</span>}
                <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;
