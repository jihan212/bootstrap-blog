import React from 'react';
import explore from '../Images/Explore.png';

const Banner = () => {
	return (
		<div
			id='carouselExampleSlidesOnly'
			className='carousel slide'
			data-bs-ride='carousel'
		>
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<img
						src={explore}
						className='d-block w-100'
						alt='...'
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
