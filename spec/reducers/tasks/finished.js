import test from 'ava';

test.todo("'ADD_TASK' doesn't add to finished.");
test.todo("'ADD_FINISHED_TASK' adds task to finished.");
test.todo("'REMOVE_TASK' doesn't remove task from finished.");
test.todo("'EXPIRE_TASKS' removes all old tasks before given time.");
test.todo("'EXPIRE_TASKS' doesn't remove tasks after given time.");
test.todo("'EXPIRE_TASKS' doesn't remove tasks equal to given time.");