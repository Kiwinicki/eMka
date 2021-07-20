import React from 'react';
import '../scss/Menu.scss';

export default function Menu({ isMenuOpen, toggleMenu }) {
	let className = 'site-menu';
	if (isMenuOpen) {
		className += ' expanded';
	}

	return (
		<nav className={className}>
			<button className="menu-btn" onClick={() => toggleMenu()}>
				Powrót
			</button>
			<ul className="menu-list">
				<li className="menu-item">
					<a href="#home">Strona główna</a>
				</li>
				<li className="menu-item">
					<a href="#history">Historia fotografii</a>
				</li>
				<li className="menu-item">
					<a href="#about">O nas</a>
				</li>
				<li className="menu-item">
					<a href="#studio">Studio</a>
				</li>
				<li className="menu-item">
					<a href="#contact">Kontakt</a>
				</li>
			</ul>
		</nav>
	);
}
