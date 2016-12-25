export default (state = 0, action) => {
	switch (action.type) {
		case "ADD_FINISHED_TASK":
		case "INCREMENT_SCORE":
			return state + 1;

		case "DECREMENT_SCORE":
			return state - 1;
	}

	return state;
};
