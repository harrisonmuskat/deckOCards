import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import CardList from '../components/CardList';

const cards = [
	{id: 1, suit: 'hearts'},
	{id: 2, suit: 'diamonds'},
	{id: 3, suit: 'spades'},
	{id: 4, suit: 'clubs'},
	{id: 5, suit: 'joker'},
];

let app = (
	<CardList cards={cards}/>
)

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		app,
		document.getElementById('app')
	);
});