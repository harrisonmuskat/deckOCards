import React from 'react';
import Card from './Card';
import Grid from '@material-ui/core/Grid';

const CardList = props => {
  let cards = props.cards.map(card => {
    return (
				<Card
					key={card.id}
					id={card.id}
					name={card.suit}
				/>
    );
	});
	
	const containerStyle = {
		paddingTop: '20px',
	};

  return (
    <Grid container justify='center' spacing='16' style={containerStyle}>
			{cards}
    </Grid>
  );
};

export default CardList;