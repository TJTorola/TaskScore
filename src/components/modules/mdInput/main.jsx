import React from 'react';

export default props => (
	<div className="md-input"> 
		<input { ...props } required />
		<span className="highlight"></span>
		<span className="bar"></span>
		<label>{ props.placeholder }</label>
	</div>
);
