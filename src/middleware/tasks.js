import { addTask, addFinishedTask } from 'actions/tasks';

const buildTask = ({ dispatch, getState }, { description }) => {
	const { tasks: { nextId } } = getState(),
	      created = Date.now();

	dispatch(addTask(nextId, description, created));
}

const finishTask = ({ dispatch, getState }, { id }) => {
	const { tasks: { current } } = getState(),
	      task = current.find(task => task.id === id);

	if (task) {
		dispatch(addFinishedTask(id, task.description, Date.now()));
	}
}

export default store => next => action => {
	switch (action.type) {
		case "BUILD_TASK":
			buildTask(store, action);
			break;
		case "FINISH_TASK":
			finishTask(store, action);
			break;
	}
	return next(action);
};
