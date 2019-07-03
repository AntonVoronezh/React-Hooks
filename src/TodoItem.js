import React, { useState } from 'react';

export default function TodoItem({ title, id, completed }) {
	const [isCompleted, setIsCompleted] = useState(completed);

	const cls = ['todo'];

	if (isCompleted) {
		cls.push('completed');
	}

	return (
		<li className={cls.join(' ')}>
			<label>
				<input type="checkbox" defaultChecked={false} />
				<span>{title}</span>

				<i className="material-icons red-text">delete</i>
			</label>
		</li>
	);
}
