import React from 'react';
import Card from './Card';
import {Row, Col} from 'react-materialize';

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

  return (
    <Row>
			<Col s={1} className='edge'></Col>
			{cards}
			<Col s={1} className='edge'></Col>
    </Row>
  );
};

export default CardList;