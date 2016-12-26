import React from 'react';

export default finishTask => task => (
	<li key={ task.id } onClick={ finishTask(task.id) }>{ task.description }</li>
);
