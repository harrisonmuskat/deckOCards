import React, { Component } from 'react';
import CardButton from './CardButton';
import LoadingIcon from './LoadingIcon';
import {Grid} from '@material-ui/core';
class Card extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			rank: '',
			suit: '',
			img_url: '',
			loading: false,
			initialRender: true,
		 }
		 this.props.handleClick = this.handleClick.bind(this);
	}

	handleClick(buttonId) {
		this.setState({loading: true}, () => {
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
					this.setState({ 
						rank: body.rank, 
						suit: body.suit, 
						img_url: body.img_url,
						loading: false,
						initialRender: false,
					});
				})
				.catch(error => console.error(`Error in fetch: ${error.message}`));
		});
	}

	render() {
		const { rank, suit, img_url, loading, initialRender} = this.state;
		const	card = `${rank} of ${suit}`;
		let content;
		initialRender ? content = null : content = <div> <img src={img_url} alt={card}/> </div>;
		return (
			<Grid container xs className='card' justify='center'>
				<Grid className='button-holder' container justify='center' alignItems='baseline' xs='8'>
					<CardButton onClick={() => this.handleClick(this.props.name)} name={this.props.name}/>
				</Grid>
				<Grid className='card-loader' container justify='center' alignItems='stretch' xs='8'>
					{loading ? <LoadingIcon /> : content}
				</Grid>
			</Grid>
		);
	}
}

export default Card;