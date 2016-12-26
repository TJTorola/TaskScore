import { applyMiddleware } from 'redux';

import tasks from 'middleware/tasks';

export default applyMiddleware(
	tasks
);
