import React from 'react';

const handleRemove = removeTask => e => {
	e.stopPropagation();
	removeTask();
};

export default (finishTask, removeTask) => task => (
	<li key={ task.id } onClick={ finishTask(task.id) }>
		{ task.description }&nbsp;
		<span className="remove" 
		      onClick={ handleRemove(removeTask(task.id)) }>X</span>
	</li>
);
