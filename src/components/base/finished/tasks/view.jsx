import React from 'react';

import ListItem from './listItem';

export default ({ tasks, unfinishTask }) => (
	<ul>
		{ tasks.map(ListItem(unfinishTask)) }
	</ul>
);