import React from 'react';

import ListItem from './listItem';

export default ({ tasks }) => (
	<ul>
		{ tasks.map(ListItem) }
	</ul>
);