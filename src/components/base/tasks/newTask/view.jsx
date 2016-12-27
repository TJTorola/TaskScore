import React from 'react';

import Input from 'components/modules/mdInput/main';

const submit = buildTask => e => {
	if (e.charCode !== 13) return;

	buildTask(e.target.value);
	e.target.value = "";
};

export default ({ buildTask }) => (
	<Input type="text" 
	       onKeyPress={ submit(buildTask) } 
	       placeholder="+ Add New Task" />
);
