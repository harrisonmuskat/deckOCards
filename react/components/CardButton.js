import React from 'react';
import Button from '@material-ui/core/Button';

const CardButton = props => {
	return (
		<Button color='primary' variant='contained' onClick={props.onClick}>{props.name}</Button>
	);
};

export default CardButton;