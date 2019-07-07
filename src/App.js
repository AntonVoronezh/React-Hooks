import React, { useState, useEffect, useReducer } from 'react';

import TodoList from './TodoList';
import { Context } from './context';
import reducer from './reducer';

const App = () => {
	const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')));

	// const [todos, setTodos] = useState([
	// 	// { id: 1, title: 'First todo', completed: false },
	// 	// { id: 2, title: 'Second todo', completed: true },
	// ]);

	const [todoTitle, setTodoTitle] = useState('');

	// useEffect(() => {
	// 	const raw = localStorage.getItem('todos') || [];
	// 	setTodos(JSON.parse(raw));
	// }, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	// }, [todos]);
	}, [state]);

	const addTodo = event => {
		if (event.key === 'Enter') {
			dispatch({
				type: 'ADD',
				payload: todoTitle
			})
			// setTodos([
			// 	...state,
			// 	// ...todos,
			// 	{
			// 		title: todoTitle,
			// 		completed: false,
			// 		id: Date.now(),
			// 	},
			// ]);
		}

		// setTodoTitle('');
	};

	// const removeTodo = id => {
	// 	setTodos(todos.filter(todo => todo.id !== id));
	// };
	// const toggleTodo = id => {
	// 	setTodos(
	// 		todos.map(todo => {
	// 			if (todo.id === id) {
	// 				todo.completed = !todo.completed;
	// 			}
	// 			return todo;
	// 		})
	// 	);
	// };

	return (
		<Context.Provider value={{ }}>
		{/* <Context.Provider value={{ removeTodo, toggleTodo }}> */}
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

				<TodoList todos={state} />
				{/* <TodoList todos={todos} /> */}
			</div>
		</Context.Provider>
	);
};

export default App;
