import React from 'react';

import ListItem from './listItem';

export default ({ tasks, finishTask, removeTask }) => (
	<ul>
		{ tasks.map(ListItem(finishTask, removeTask)) }
	</ul>
);
