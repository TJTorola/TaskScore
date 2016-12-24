import test from 'ava';

test.todo("'BUILD_TASK' takes a description then emits 'ADD_TASK'.");
test.todo("'BUILD_TASK' adds time to task.");
test.todo("'BUILD_TASK' adds nextId to task.");
test.todo("'FINISH_TASK' emits 'ADD_FINISHED_TASK' if task found in current.");
test.todo("'FINISH_TASK' does nothing if no task found.");