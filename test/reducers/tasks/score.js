import test from 'ava';

import reducer from 'reducers/tasks/score';
import { 
	incramentScore,
	decrementScore
} from 'actions/tasks';

const initial     = reducer(undefined, {}),
      incramented = reducer(initial, incramentScore()),
      decramented = reducer(incramented, decrementScore());

test("Inializes to 0.", t => {
	t.is(initial, 0);
});

test("'INCREMENT_SCORE' increases the score by one.", t => {
	t.is(incramented, 1);
});

test("'DECREMENT_SCORE' decreases the score by one.", t => {
	t.is(decramented, 0);
});
