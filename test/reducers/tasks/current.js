import test from 'ava';

import reducer from 'reducers/tasks/current';

test.todo("'ADD_TASK' adds to current tasks.");
test.todo("'FINISH_TASK' removes task from current task.");
test.todo("'FINISH_TASK' does nothing without found ID.");
test.todo("'REMOVE_TASK' removes task from current task.");
test.todo("'REMOVE_TASK' does nothing without found ID.");
test.todo("'EXPIRE_TASKS' removes all old tasks before given time.");
test.todo("'EXPIRE_TASKS' doesn't remove tasks after given time.");
test.todo("'EXPIRE_TASKS' doesn't remove tasks equal to given time.");
