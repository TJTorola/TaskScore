export const buildTask = str => ({
	type: "BUILD_TASK",
	description: str
});

export const addTask = (id, str, int) => ({
	type: "ADD_TASK",
	id: id,
	description: str,
	created: int
});

export const finishTask = int => ({
	type: "FINISH_TASK",
	id: int
});

export const removeTask = int => ({
	type: "REMOVE_TASK",
	id: int
});

export const incramentScore = () => ({
	type: "INCREMENT_SCORE"
});

export const decrementScore = () => ({
	type: "DECREMENT_SCORE"
});

export const expireTasks = int => ({
	type: "EXPIRE_TASKS",
	time: int
});
