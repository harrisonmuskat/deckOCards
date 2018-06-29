import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CardList from '../components/CardList';

const cards = [
	{id: 1, suit: 'hearts'},
	{id: 2, suit: 'diamonds'},
	{id: 3, suit: 'spades'},
	{id: 4, suit: 'clubs'},
	{id: 5, suit: 'joker'},
];

let app = (
	<div>
	<AppBar position="static" color="inherit">
		<Toolbar>
			<Typography variant="title" color="inherit">
				Deck of Cards
			</Typography>
		</Toolbar>
	</AppBar>
	<CardList cards={cards}/>
	</div>
)

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		app,
		document.getElementById('app')
	);
});