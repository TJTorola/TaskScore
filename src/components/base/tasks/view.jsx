import React from 'react';

import NewTask from './newTask/container';
import List from './list/container';

export default () => (
	<div id="Tasks">
		<NewTask />
		<List />
	</div>
);
