import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';

const App = () => {
	const [todos, setTodos] = useState([
		// { id: 1, title: 'First todo', completed: false },
		// { id: 2, title: 'Second todo', completed: true },
	]);

	const [todoTitle, setTodoTitle] = useState('');

	useEffect(() => {
		console.log('init');
		
	})

	const addTodo = event => {
		if (event.key === 'Enter') {
			setTodos([
				...todos,
				{
					title: todoTitle,
					completed: false,
					id: Date.now(),
				},
			]);
		}

		// setTodoTitle('');
	};

	return (
		<div className="container">
			<h1>Todo app</h1>

			<div className="input-field">
				<input
					type="text"
					value={todoTitle}
					onChange={event => setTodoTitle(event.target.value)}
					onKeyPress={addTodo}
				/>
				<label>Todo name</label>
			</div>

			<TodoList todos={todos} />
		</div>
	);
};

export default App;
