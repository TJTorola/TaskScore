import test from 'ava';

import reducer from 'reducers/tasks/finished';
import { 
	addTask,
	addFinishedTask,
	removeTask,
	expireTasks,
	unfinishTask
} from 'actions/tasks';

const initial    = reducer(undefined, {}),
      oneTask    = reducer(initial, addFinishedTask(0, 'task 1', 1000000000000)),
      twoTasks   = reducer(oneTask, addFinishedTask(1, 'task 2', 2000000000000)),
      threeTasks = reducer(twoTasks, addFinishedTask(2, 'task 3', 3000000000000)),
      expired    = reducer(threeTasks, expireTasks(2500000000000));

test("Initializes with no tasks.", t => {
	t.is(initial.length, 0);
});

test("'ADD_TASK' doesn't add to finished.", t => {
	const next = reducer(initial, addTask(0, 'task 1', 1482558947276));
	t.is(next.length, 0);
});

test("'ADD_FINISHED_TASK' adds task to finished.", t => {
	t.is(oneTask.length, 1);
});

test("'REMOVE_TASK' doesn't remove task from finished.", t => {
	const next = reducer(threeTasks, removeTask(1));
	t.is(next.length, 3);
});

test("'EXPIRE_TASKS' removes all old tasks before given time.", t => {
	t.is(expired.length, 1);
});

test("'EXPIRE_TASKS' doesn't remove tasks after given time.", t => {
	t.is(expired[0].id, 2);
});

test("'EXPIRE_TASKS' doesn't remove tasks equal to given time.", t => {
	const next = reducer(threeTasks, expireTasks(1000000000000));
	t.is(next.length, 3);
});

test("'UNFINISH_TASK' removes found task from finished.", t => {
	const next = reducer(threeTasks, unfinishTask(1));
	t.is(next.length, 2);
});

test("'UNFINISH_TASK' has no effect if task is not found.", t => {
	const next = reducer(threeTasks, unfinishTask(5));
	t.is(next.length, 3);
});
