export const buildTask = str => ({
	type: "BUILD_TASK",
	description: str
});

export const addTask = (int, str, stamp) => ({
	type: "ADD_TASK",
	id: int,
	description: str,
	created: stamp
});

export const finishTask = int => ({
	type: "FINISH_TASK",
	id: int
});

export const addFinishedTask = (int, str, stamp) => ({
	type: "ADD_FINISHED_TASK",
	description: str,
	finished: stamp
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
