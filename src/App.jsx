import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Banner from './Components/Banner.jsx';
import Card from './Components/Card.jsx';

function App() {
	return (
		<>
			<Navbar />
			<Banner />
			<div className='container text-center mt-2'>
				<div className='row align-items-start'>
					<div className='col'>
						<Card />
					</div>
					<div className='col'>
						<Card />
					</div>
					<div className='col'>
						<Card />
					</div>
				</div>
				<div className='row mt-2'></div>
			</div>
		</>
	);
}

export default App;
