import { combineReducers } from 'redux';

import current from './current';
import finished from './finished';
import nextId from './nextId';
import score from './score';

export default combineReducers({ 
	current,
	finished,
	nextId,
	score
});