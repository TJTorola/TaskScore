import React from 'react';

const submit = buildTask => e => {
	if (e.charCode !== 13) return;

	buildTask(e.target.value);
	e.target.value = "";
};

export default ({ buildTask }) => (
	<input type="text" onKeyPress={ submit(buildTask) } />
);
