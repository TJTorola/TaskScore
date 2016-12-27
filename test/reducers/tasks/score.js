import test from 'ava';

import reducer from 'reducers/tasks/score';
import { 
	incramentScore,
	decrementScore,
	addFinishedTask
} from 'actions/tasks';

const initial     = reducer(undefined, {}),
      incramented = reducer(initial, incramentScore()),
      finished    = reducer(incramented, addFinishedTask(0, 'task', 92031910239)),
      decramented = reducer(finished, decrementScore());

test("Inializes to 0.", t => {
	t.is(initial, 0);
});

test("'INCREMENT_SCORE' increases the score by one.", t => {
	t.is(incramented, 1);
});

test("'ADD_FINISHED_TASK' increases the score by one.", t => {
	t.is(finished, 2);
});

test("'DECREMENT_SCORE' decreases the score by one.", t => {
	t.is(decramented, 1);
});
