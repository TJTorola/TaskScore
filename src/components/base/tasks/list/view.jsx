import React from 'react';

import ListItem from './listItem';

export default () => (
	<ul>
		{ [].map(ListItem) }
	</ul>
);
