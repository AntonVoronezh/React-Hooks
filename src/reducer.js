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

		default:
			return state;
	}
}
