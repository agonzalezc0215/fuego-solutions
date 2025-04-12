import React from 'react';
import PageSection from '../components/PageSection';
import bgImage from '../assets/bg-3.jpeg';
import '../styles/About.css';
import '../styles/common.css';

const About: React.FC = () => {
	const renderContent = () => {
		return (
			<React.Fragment>
				<h1>About Fuego Solutions & Technology</h1>
				<p>
					Founded in 2015, Fuego Solutions is a dedicated Fire & Life Safety
					company proudly serving the Southeast region. We specialize in fire
					protection systems, safety plans, inspection services, and custom life
					safety solutions for commercial and residential clients.
				</p>

				<p>
					With a client-centered approach and an experienced team of certified
					professionals, we deliver end-to-end fire safety—from consultation and
					equipment installation to regular maintenance and emergency response
					readiness.
				</p>

				<p>
					Our mission is simple:{' '}
					<strong>
						to protect what matters most—lives and property—through reliable
						technology and expert service.
					</strong>
				</p>

				<p>
					Fuego Solutions is built on core values of{' '}
					<strong>excellence, responsiveness, and trust</strong>. We don't just
					meet code—we exceed expectations. That’s why hundreds of clients rely
					on us to keep their facilities safe, compliant, and prepared.
				</p>

				<div className='about-values'>
					<h2>Why Choose Fuego Solutions?</h2>
					<ul>
						<li>✅ Certified & Licensed Technicians</li>
						<li>✅ Customized Fire Safety Plans</li>
						<li>✅ Responsive 24/7 Service</li>
						<li>✅ Comprehensive Inspection & Reporting</li>
						<li>
							✅ Trusted Across Commercial, Residential & Government Sectors
						</li>
					</ul>
				</div>
			</React.Fragment>
		);
	};

	return (
		<PageSection
			title='About Fuego Solutions & Technology'
			backgroundImage={bgImage}
			content={renderContent()}
		/>
	);
};

export default About;
