import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
	const [todos, setTodos] = useState([
		{ id: 1, title: 'First todo', completed: false },
		{ id: 2, title: 'Second todo', completed: true },
	]);

	return (
		<div className="container">
			<h1>Todo app</h1>

			<div className="input-field">
				<input type="text" />
				<label>Todo name</label>
			</div>

			<TodoList todos={this.state.todos} />
		</div>
	);
};

export default App;
