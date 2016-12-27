export default (state = [], action) => {
	switch (action.type) {
		case "ADD_FINISHED_TASK":
			return [ ...state, action.task ];

		case "UNFINISH_TASK":
			return state.filter(task => task.id !== action.id);

		case "EXPIRE_TASKS":
			return state.filter(task => task.finished >= action.time);
	}

	return state;
};
