import test from 'ava';

import { middlewareSpies } from 'lib/test';
import tasks from 'middleware/tasks';
import {
	buildTask,
	finishTask,
	unfinishTask
} from 'actions/tasks';


const generateSpies = () => middlewareSpies({
	tasks: {
		nextId: 5,
		score: 0,
		current: [{
			id: 2,
			description: 'current task',
			created: 1482605650233
		}],
		finished: []
	}
}, tasks);

test("'BUILD_TASK' takes a description then dispatch 'ADD_TASK'.", t => {
	const { middleware, store: { dispatch } } = generateSpies();

	middleware(buildTask('test build'));
	t.is(dispatch.args[0][0].type, "ADD_TASK");
});

test("'BUILD_TASK' adds time to task.", t => {
	const { middleware, store: { dispatch } } = generateSpies();

	middleware(buildTask('test build'));
	t.true(dispatch.args[0][0].task.created <= Date.now());
});

test("'BUILD_TASK' adds nextId to task.", t => {
	const { middleware, store: { dispatch } } = generateSpies();

	middleware(buildTask('test build'));
	t.is(dispatch.args[0][0].task.id, 5);
});

test("'FINISH_TASK' dispatch 'ADD_FINISHED_TASK' if task found in current.", t => {
	const { middleware, store: { dispatch } } = generateSpies();

	middleware(finishTask(2));
	t.is(dispatch.args[0][0].type, "ADD_FINISHED_TASK");
});

test("'FINISH_TASK' adds new finished date to task.", t => {
	const { middleware, store: { dispatch } } = generateSpies();

	middleware(finishTask(2));
	t.true(dispatch.args[0][0].task.finished > 1482605650233);
});

test("'FINISH_TASK' does nothing if no task found.", t => {
	const { middleware, store: { dispatch } } = generateSpies();

	middleware(finishTask(1));
	t.false(dispatch.called);
});

test("'UNFINISH_TASK' dispatch 'ADD_TASK' if task is found in finished.", t => {
	const { middleware, store: { dispatch } } = generateSpies();

	middleware(unfinishTask(2));
	t.is(dispatch.args[0][0].type, "ADD_TASK");
});

test("'UNFINISH_TASK' does nothing if no task is found in finished.", t => {
	const { middleware, store: { dispatch } } = generateSpies();

	middleware(unfinishTask(1));
	t.false(dispatch.called);
});

test("'UNFINISH_TASK' keeps finished time as created time.", t => {
	const { middleware, store: { dispatch } } = generateSpies();

	middleware(unfinishTask(2));
	t.is(dispatch.args[0][0].task.created, 1482605650233);
});
