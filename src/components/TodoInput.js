import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} placeholder="Add a new todo" />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoInput;
