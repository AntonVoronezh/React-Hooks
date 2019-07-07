import React, { useContext } from 'react';

import { Context } from './context';

export default function TodoItem({ title, id, completed }) {
	const { removeTodo, toggleTodo } = useContext(Context);

	const cls = ['todo'];

	if (completed) {
		cls.push('completed');
	}

	return (
		<li className={cls.join(' ')}>
			<label>
				<input type="checkbox" defaultChecked={false} onChange={() => toggleTodo(id)} />
				<span>{title}</span>

				<i className="material-icons red-text" onClick={() => removeTodo(id)}>
					delete
				</i>
			</label>
		</li>
	);
}
