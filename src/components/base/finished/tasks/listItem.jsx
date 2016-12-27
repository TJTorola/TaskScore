import React from 'react';

export default task => (
	<li key={ task.id }>{ task.description }</li>
);
