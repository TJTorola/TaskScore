export const buildTask = str => ({
	type: "BUILD_TASK",
	description: str
});

export const addTask = (int, str, int) => ({
	type: "ADD_TASK",
	id: int,
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

export const expireFinishedTasks = int => ({
	type: "EXPIRE_FINISHED_TASKS",
	time: int
});
