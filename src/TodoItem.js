import React, { useState } from 'react';

export default function TodoItem({ title, id, completed }) {
	const [isCompleted, setIsCompleted] = useState(completed);

	const cls = ['todo'];

	return (
		<li className="todo">
			<label>
				<input type="checkbox" defaultChecked={false} />
				<span>{title}</span>

				<i className="material-icons red-text">delete</i>
			</label>
		</li>
	);
}
