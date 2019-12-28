import * as TYPE from "../constants/action-types";

const initialState = {
	todos: []
};

const rootReducer = (state = initialState, action) => {
	if (action.type === TYPE.ADD_TODO) {
		return {
			...state,
			todos: state.todos.concat(action.payload)
		}
	}
	if (action.type === TYPE.COMPLETED_TODO) {
		// check to see if there's any matching description in the todos list state
		/*let compl = state.todos.filter(todo => (todo.description === action.payload));

		let newState = [...state.todos];
		for (let i = 0; i < newState.length; i++) {
			if (newState[i].id === compl[0].id) {
				newState[i].completed = !newState[i].completed;
			}
		}*/

		return {
			...state,
			todos: state.todos.map(todo =>
				todo.id === action.payload
				? {...todo, completed: !todo.completed} : todo
			)
		}
	}
	if (action.type === TYPE.REMOVE_TODO) {
		return {
			...state,
			todos: state.todos.filter(todo => (todo.id !== action.payload))
		}
	}
	return state;
};

export default rootReducer;