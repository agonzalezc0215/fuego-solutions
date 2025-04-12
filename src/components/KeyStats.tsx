import React from 'react';
import CountUp from './CountUp';
import '../styles/KeyStats.css';

const KeyStats: React.FC = () => {
	return (
		<section className='stats-banner'>
			<div className='stat'>
				<CountUp end={500} suffix='+' />
				<p>Clients Protected</p>
			</div>

			<div className='stat'>
				<CountUp end={10} suffix='+' />
				<p>Years Experience</p>
			</div>

			<div className='stat'>
				<CountUp end={24} suffix='/7' />
				<p>Emergency Coverage</p>
			</div>

			<div className='stat'>
				<CountUp end={99} suffix='%' />
				<p>Inspection Pass Rate</p>
			</div>
		</section>
	);
};

export default KeyStats;
