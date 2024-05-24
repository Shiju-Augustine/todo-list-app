import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <div>
            {
                todos.length === 0 ? (
                    <p>No todos available</p>
                ) : (
                    <ul>
                        {todos.map(todo => (
                            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                        ))}
                    </ul>
                )
            }
        </div>
    );
};

export default TodoList;
