import test from 'ava';

import reducer from 'reducers/tasks/nextId';
import { 
	addTask,
	removeTask
} from 'actions/tasks';

const initial = reducer(undefined, {}),
      added   = reducer(initial, addTask(0, 'task', 81923812784)),
      removed = reducer(added, removeTask(0));

test("Initializes to 0.", t => {
	t.is(initial, 0);
});

test("'ADD_TASK' incraments the nextId.", t => {
	t.is(added, 1);
});

test("'REMOVE_TASK' has no effect.", t => {
	t.is(removed, 1);
});
