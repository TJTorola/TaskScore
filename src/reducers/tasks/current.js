export default (state = [], action) => {
	switch (action.type) {
		case "ADD_TASK":
			return [ ...state, action.task ];

		case "FINISH_TASK":
		case "REMOVE_TASK":
			return state.filter(task => task.id != action.id);

		case "EXPIRE_TASKS":
			return state.filter(task => task.created >= action.time);
	}

	return state;
};
