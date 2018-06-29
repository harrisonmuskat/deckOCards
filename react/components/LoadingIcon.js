import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingIcon = () => {
	return (
		<div>
			<CircularProgress className='loading-icon' size='100'/>
		</div>
	);
};

export default LoadingIcon;