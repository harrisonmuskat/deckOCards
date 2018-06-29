import React from 'react';

const CardButton = props => {
	return (
		<button type='button' onClick={props.onClick}>{props.name}</button>
	);
};

export default CardButton;