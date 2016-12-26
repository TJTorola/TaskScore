import React from 'react';

import ListItem from './listItem';

export default ({ tasks, finishTask }) => (
	<ul>
		{ tasks.map(ListItem(finishTask)) }
	</ul>
);
