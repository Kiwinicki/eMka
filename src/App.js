import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import History from './components/History';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
	const [isMenuOpen, setMenuOpen] = useState(false);
	return (
		<>
			<Home toggleMenu={() => setMenuOpen(!isMenuOpen)} />
			<Menu
				toggleMenu={() => setMenuOpen(!isMenuOpen)}
				isMenuOpen={isMenuOpen}
			/>
			<main>
				<History />
				<About />
				<Contact />
			</main>
		</>
	);
}
