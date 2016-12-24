import test from 'ava';

import tasks from 'middleware/tasks';
import {
	buildTask,
	finishTask
} from 'actions/tasks';

const mockStore = ({
	getState: () => ({
		tasks: {
			nextId: 0,
			score: 0,
			current: [],
			finished: []
		}
	}),
	dispatch: action => () => action
});
const middleware = tasks(mockStore)(() => {});

test("'BUILD_TASK' takes a description then dispatch 'ADD_TASK'.", t => {
	
});

test("'BUILD_TASK' adds time to task.", t => {

});

test("'BUILD_TASK' adds nextId to task.", t => {

});

test("'FINISH_TASK' dispatch 'ADD_FINISHED_TASK' if task found in current.", t => {

});

test("'FINISH_TASK' does nothing if no task found.", t => {

});
