import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';

const App: React.FC = () => {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<ContactUs />} />
				<Route path='/' element={<Home />} />
				<Route path='/services' element={<Services />} />
				<Route path='/solutions' element={<Solutions />} />
			</Routes>
		</div>
	);
};

export default App;
