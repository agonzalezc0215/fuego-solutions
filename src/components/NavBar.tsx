// src/components/NavBar.tsx
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<header className='header'>
			<button
				className='menu-toggle'
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label='Toggle menu'>
				☰
			</button>
			<nav
				className={`nav ${menuOpen ? 'nav-open' : ''} ${
					scrolled ? 'scrolled' : ''
				}`}>
				<NavLink
					to='/'
					className={({ isActive }) => (isActive ? 'active' : '')}
					onClick={() => setMenuOpen(false)}>
					Home
				</NavLink>
				<NavLink
					to='/about'
					className={({ isActive }) => (isActive ? 'active' : '')}
					onClick={() => setMenuOpen(false)}>
					About
				</NavLink>
				<NavLink
					to='/services'
					className={({ isActive }) => (isActive ? 'active' : '')}
					onClick={() => setMenuOpen(false)}>
					Services
				</NavLink>
				<NavLink
					to='/solutions'
					className={({ isActive }) => (isActive ? 'active' : '')}
					onClick={() => setMenuOpen(false)}>
					Solutions
				</NavLink>
				<NavLink
					to='/contact'
					className={({ isActive }) => (isActive ? 'active' : '')}
					onClick={() => setMenuOpen(false)}>
					Contact
				</NavLink>
			</nav>
		</header>
	);
};

export default NavBar;
