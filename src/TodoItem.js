import React, { useState, useContext } from 'react';

import { Context } from './context';

export default function TodoItem({ title, id, completed }) {
	
	const [isCompleted, setIsCompleted] = useState(completed);

	const { removeTodo } = useContext(Context);

	const cls = ['todo'];

	if (isCompleted) {
		cls.push('completed');
	}

	return (
		<li className={cls.join(' ')}>
			<label>
				<input type="checkbox" defaultChecked={false} onChange={() => setIsCompleted(!isCompleted)} />
				<span>{title}</span>

				<i className="material-icons red-text" onClick={() => removeTodo(id)}>
					delete
				</i>
			</label>
		</li>
	);
}
