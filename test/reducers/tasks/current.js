import test from 'ava';

import reducer from 'reducers/tasks/current';
import { 
	addTask,
	finishTask,
	removeTask,
	expireTasks 
} from 'actions/tasks';

const initial    = reducer(undefined, {}),
      oneTask    = reducer(init, addTask(0, 'task 1', 1482558947276)),
      twoTasks   = reducer(init, addTask(1, 'task 2', 1482559482883)),
      threeTasks = reducer(init, addTask(2, 'task 3', 1482602862321)),
      expired    = reducer(threeTasks, expireTasks(1482559483883));

test("Initializes with no tasks.", t => {
	t.is(initial.length, 0);
});

test("'ADD_TASK' adds to current tasks.", t => {
	t.is(oneTask.length, 1);
});

test("'FINISH_TASK' removes task from current task.", t => {
	const next = reducer(oneTask, finishTask(0));
	t.is(next.length, 0);
});

test("'FINISH_TASK' does nothing without found ID.", t => {
	const next = reducer(oneTask, finishTask(3));
	t.is(next.length, 1);
});

test("'REMOVE_TASK' removes task from current task.", t => {
	const next = reducer(oneTask, removeTask(0));
	t.is(next.length, 0);
});

test("'REMOVE_TASK' does nothing without found ID.", t => {
	const next = reducer(oneTask, removeTask(3));
	t.is(next.length, 0);
});

test("'EXPIRE_TASKS' removes all old tasks before given time.", t => {
	t.is(expired.length, 1);
});

test("'EXPIRE_TASKS' doesn't remove tasks after given time.", t => {
	t.is(expired[0].id, 2);
});

test("'EXPIRE_TASKS' doesn't remove tasks equal to given time.", t => {
	const next = reducer(threeTasks, expireTasks(1482558947276));
	t.is(expired.length, 3);
});

