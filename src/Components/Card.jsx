import React from 'react';
import card from '../Images/card.png';

const Card = () => {
	return (
		<div
			className='card'
			style={{ width: '18rem' }}
		>
			<img
				src={card}
				className='card-img-top'
				alt='...'
			/>
			<div className='card-body'>
				<h5 className='card-title'>Card title</h5>
				<p className='card-text'>
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a
					href='http://localhost:3000/'
					className='btn btn-primary'
				>
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Card;
