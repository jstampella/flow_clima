import React from 'react';

// import scss
import './header.scss';
export default function Header() {
	return (
		<header className='header'>
			<div className='title'>App de Clima</div>
			<div>
				<i className='fas fa-sun'></i>
			</div>
		</header>
	);
}
