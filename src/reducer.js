export default function reducer(state, action) {
	switch (action.type) {
		case 'ADD':
			return [
				...state,
				{
					title: action.payload,
					completed: false,
					id: Date.now(),
				},
			];
		case 'REMOVE':
			return state.filter(todo => todo.id !== action.payload);

		case 'TOGGLE':
			return state.map(todo => {
				if (todo.id === action.payload) {
					todo.completed = !todo.completed;
				}
				return todo;
			});

		default:
			return state;
	}
}
