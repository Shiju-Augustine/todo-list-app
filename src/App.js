import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showToaster, setShowToaster] = useState(false);
  const [toasterMessage, setToasterMessage] = useState('');

  useEffect(() => {
    // Load initial dummy data
    const dummyTodos = [
      { id: 1, text: 'Todo sample text 1', completed: false },
      { id: 2, text: 'Todo sample text 2', completed: true },
      { id: 3, text: 'Todo sample text 3', completed: false }
    ];
    setTodos(dummyTodos);
  }, []);

  useEffect(() => {
    // Update counts whenever todos change
    const completedTodos = todos.filter(todo => todo.completed);
    setCompletedCount(completedTodos.length);
    setPendingCount(todos.length - completedTodos.length);
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
    setToasterMessage('Todo added successfully!');
    setShowToaster(true);
    setTimeout(() => setShowToaster(false), 2000); // Hide toaster after 2 seconds
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this todo?');

    if (isConfirmed) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='app-container'>
      <h1>To-Do List App</h1>
      <TodoInput addTodo={addTodo} />
      {showToaster && <div className="toaster">{toasterMessage}</div>}
      <h3>To-Do Items</h3>
      {todos.length > 0 && (
        <div>
          Total: <b>{todos.length}</b>, Completed: <b>{completedCount}</b>, Pending: <b>{pendingCount}</b>
          <input type="text" className="search-input" value={searchTerm} onChange={handleSearchChange} placeholder="Search todos" />
        </div>
      )}
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
