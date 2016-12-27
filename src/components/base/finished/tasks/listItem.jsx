import React from 'react';

export default unfinishTask => task => (
	<li key={ task.id } onClick={ unfinishTask(task.id) }>{ task.description }</li>
);
