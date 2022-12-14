import React from 'react';
import logo from '../Images/logo.png';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg bg-light'>
			<div className='container-fluid'>
				<a
					className='navbar-brand'
					href='http://localhost:3000/'
				>
					<img
						src={logo}
						width='30'
						height='30'
						alt='...'
					/>
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='http://localhost:3000/navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse'
					id='navbarSupportedContent'
				>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<a
								className='nav-link active'
								aria-current='page'
								href='http://localhost:3000/'
							>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								href='http://localhost:3000/'
							>
								About
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								href='http://localhost:3000/'
							>
								Blog
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								href='http://localhost:3000/'
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
