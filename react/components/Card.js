import React, { Component } from 'react';
import CardButton from './CardButton';
import {Col} from 'react-materialize';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			rank: '',
			suit: '',
			img_url: '',
		 }
		 this.props.handleClick = this.handleClick.bind(this);
	}

	handleClick(buttonId) {
		console.log('button clicked');
		console.log(buttonId);
		fetch(`/api/v1/cards/${buttonId}`)
			.then(response => {
				if (response.ok) {
					return response;
				} else {
					let errorMessage = `${response.status} (${response.statusText})`,
							error = new Error(errorMessage);
					throw error;
				}
			})
			.then(response => response.json())
			.then(body => {
				this.setState({ rank: body.rank, suit: body.suit, img_url: body.img_url });
			})
			.catch(error => console.error(`Error in fetch: ${error.message}`));
	}

	componentDidMount() {
		fetch(`/api/v1/cards/${this.props.name}`)
			.then(response => {
				if (response.ok) {
					return response;
				} else {
					let errorMessage = `${response.status} (${response.statusText})`,
							error = new Error(errorMessage);
					throw error;
				}
			})
			.then(response => response.json())
			.then(body => {
				this.setState({ rank: body.rank, suit: body.suit, img_url: body.img_url });
			})
			.catch(error => console.error(`Error in fetch: ${error.message}`));
	}

	render() {
		let img = this.state.img_url;
		let	card = `${this.state.rank} of ${this.state.suit}`;
		console.log(this.state.img_url);
		return (
			<Col s={2} className='card'>
				<CardButton onClick={() => this.handleClick(this.props.name)} name={this.props.name}/>
				<img src={img} alt={card}/>
			</Col>
		);
	}
}

export default Card;