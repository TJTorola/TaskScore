import React from 'react';

export default props => {
	const { placeholder, ...rest } = props;

	return (
		<div className="md-input"> 
			<input { ...rest } required />
			<label>{ placeholder }</label>
		</div>
	);
};
