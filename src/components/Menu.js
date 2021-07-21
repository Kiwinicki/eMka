import React from 'react';
import '../scss/Menu.scss';

export default function Menu({ isMenuOpen, toggleMenu }) {
	let className = 'site-menu';
	if (isMenuOpen) {
		className += ' expanded';
	}

	const handleClick = (event, elem) => {
		event.preventDefault();
		toggleMenu();
		document
			.getElementById(elem)
			.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<nav className={className}>
			<button className="menu-btn" onClick={() => toggleMenu()}>
				Powrót
			</button>
			<ul className="menu-list">
				<li className="menu-item" onClick={(e) => handleClick(e, 'home')}>
					Strona główna
				</li>
				<li className="menu-item" onClick={(e) => handleClick(e, 'history')}>
					Historia fotografii
				</li>
				<li className="menu-item" onClick={(e) => handleClick(e, 'about')}>
					O nas
				</li>
				<li className="menu-item" onClick={(e) => handleClick(e, 'contact')}>
					Kontakt
				</li>
			</ul>
		</nav>
	);
}
