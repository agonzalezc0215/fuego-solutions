import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import bgImage from '../assets/bg-3.jpeg';
import briefcaseIcon from '../assets/icons/briefcase.png';
import certificateIcon from '../assets/icons/certificate.png';
import responseIcon from '../assets/icons/chat-settings.png';
import handshakeIcon from '../assets/icons/handshake.png';
import locationIcon from '../assets/icons/location.png';
import { ContactForm } from '../components/ContactForm';
import ImageCarousel from '../components/ImageCarousel';
import '../styles/Home.css';

const Home: React.FC = () => {
	const testimonials = [
		{
			name: 'Maria Gomez',
			title: 'Facility Manager',
			quote:
				'Fuego Solutions provided expert fire safety services with unmatched professionalism. A trusted partner we count on.',
		},
		{
			name: 'Luis Fernandez',
			title: 'Operations Director',
			quote:
				'Quick, reliable, and incredibly thorough. Their team knows fire safety inside out. Highly recommend.',
		},
		{
			name: 'Jasmine Rivera',
			title: 'Business Owner',
			quote:
				'We felt confident from day one. Their inspections, plans, and support are all top notch.',
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % testimonials.length);
		}, 6000);
		return () => clearInterval(timer);
	}, [activeIndex]);

	const renderHeroSection = () => {
		return (
			<section className='hero-section'>
				<motion.div
					className='hero-text'
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}>
					<h1>
						Innovative Technology. Trusted Solutions. Protecting Lives and
						Properties Since 2015.
					</h1>
					<p>
						At Fuego Solutions, we are committed to delivering excellence in
						every project, ensuring your success in day-to-day operations. Our
						expert team provides tailored solutions designed to meet your unique
						needs. Join us on a journey of innovation, growth, and lasting
						success.
					</p>
					<p>Experience the Fuego Solutions difference today!</p>
					<div className='hero-buttons'>
						<button
							className='btn-primary btn-call'
							onClick={() => {
								window.location.href = 'tel:+15616674431'; // Replace with your phone number
							}}>
							Call Us Now
						</button>
					</div>
				</motion.div>
				<motion.div
					className='hero-image'
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}>
					{/* <img src={logo} alt='Fuego Logo' /> */}
				</motion.div>
			</section>
		);
	};

	const renderServicesSection = () => {
		const services = [
			{
				title: 'Fire Extinguisher Sales & Installation',
				description:
					'We supply all types of fire extinguishers (A, B, C, D, and K) and install them according to regulatory standards, ensuring quick access in emergencies.',
			},
			{
				title: 'Fire Alarm Systems',
				description:
					'We design and maintain alarm systems that swiftly detect and alert occupants, reducing potential damage and risk of injury.',
			},
			{
				title: 'Fire Suppression Systems',
				description:
					'For high-risk areas, we install and service chemical, gaseous, or water-based systems to quickly contain fires and protect critical assets.',
			},
			{
				title: 'Fire Sprinkler Systems',
				description:
					'We design and install automatic sprinkler systems tailored to your facility, ensuring effective fire suppression and compliance with local codes.',
			},
			{
				title: 'Fire Safety Plans',
				description:
					'We develop custom emergency protocols detailing evacuation routes, meeting points, and staff roles to ensure clear, coordinated responses.',
			},
			{
				title: 'Maintenance & Inspections',
				description:
					'Our team performs regular checks, refills, and pressure tests, providing documentation for insurance and code compliance.',
			},
			{
				title: 'Consultation & Training',
				description:
					'We assess your facility, recommend tailored safety measures, and train staff in practical fire response and extinguisher use.',
			},
		];

		return (
			<section className='services-section split-layout"'>
				<motion.h2
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					Services Overview
				</motion.h2>
				<div className='home-services-content'>
					<div className='services-left'>
						<ImageCarousel />
					</div>
					<div className='services-right'>
						<div className='service-step-list'>
							{services.map((service, index) => (
								<motion.div
									key={index}
									className='service-step'
									initial={{ opacity: 0, x: -30 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}>
									<span className='step-number'>
										{String(index + 1).padStart(2, '0')}
									</span>
									<div>
										<h3>{service.title}</h3>
										<p>{service.description}</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>
		);
	};

	const renderWhyChooseUsSection = () => {
		const reasons = [
			{
				title: 'Expertise & Certifications',
				description:
					'Our team is certified and follows industry best practices.',
				icon: certificateIcon,
			},
			{
				title: 'Proven Experience',
				description:
					'With years of experience, we deliver reliable fire safety solutions.',
				icon: briefcaseIcon,
			},
			{
				title: 'Responsive Service',
				description: 'Quick response times keep you safe and compliant.',
				icon: responseIcon,
			},
			{
				title: 'Customer-Centered Approach',
				description:
					'Tailored service, clear communication, and ongoing support every step of the way.',
				icon: handshakeIcon, // Use a relevant icon or add one you like
			},
			{
				title: 'Local Trust',
				description:
					'Personalized service trusted by numerous local businesses.',
				icon: locationIcon,
			},
		];

		return (
			<section className='why-choose-section'>
				<motion.h2
					className='why-title'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					Why Choose Us?
				</motion.h2>
				<motion.p
					className='why-subtitle'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.6 }}>
					Excellence in Fire Safety and Support
				</motion.p>
				<div className='why-cards'>
					{reasons.map((reason, index) => (
						<motion.div
							className='why-card'
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							viewport={{ once: true }}>
							<img
								src={reason.icon}
								alt='Description of image'
								style={{ height: '50px' }}
							/>
							<h3>{reason.title}</h3>
							<p>{reason.description}</p>
						</motion.div>
					))}
				</div>
			</section>
		);
	};

	const renderTestimonialsSection = () => {
		const testimonials = [
			{
				name: 'Maria Gomez',
				title: 'Facility Manager',
				quote:
					'Fuego Solutions provided expert fire safety services with unmatched professionalism. A trusted partner we count on.',
			},
			{
				name: 'Luis Fernandez',
				title: 'Operations Director',
				quote:
					'Quick, reliable, and incredibly thorough. Their team knows fire safety inside out. Highly recommend.',
			},
			{
				name: 'Jasmine Rivera',
				title: 'Business Owner',
				quote:
					'We felt confident from day one. Their inspections, plans, and support are all top notch.',
			},
		];

		return (
			<section className='testimonials-modern'>
				<h2 className='testimonial-heading'>What Our Clients Say</h2>

				<div className='testimonial-carousel'>
					<AnimatePresence mode='wait'>
						<motion.div
							key={activeIndex}
							className='testimonial-card'
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -50 }}
							transition={{ duration: 0.5 }}>
							<p className='testimonial-quote'>
								“{testimonials[activeIndex].quote}”
							</p>
							<p className='testimonial-name'>
								{testimonials[activeIndex].name}
							</p>
							<span className='testimonial-title'>
								{testimonials[activeIndex].title}
							</span>
						</motion.div>
					</AnimatePresence>
				</div>

				<div className='testimonial-dots'>
					{testimonials.map((_, i) => (
						<button
							key={i}
							className={`dot ${i === activeIndex ? 'active' : ''}`}
							onClick={() => setActiveIndex(i)}
						/>
					))}
				</div>
			</section>
		);
	};

	const renderCallToActionSection = () => {
		return (
			<section className='cta-section split-layout'>
				<motion.div
					className='hero-text cta-text'
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}>
					<h1>
						Work with Fuego Solutions. Your Certified Fire Protection Partner.
					</h1>
					<p>
						If you have questions about Fuego Solutions or our services, we’re
						here to help. Just fill out the form with as much information as
						you’d like, and a member of our team will be in touch shortly.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}>
					<div className='cta-form'>
						<ContactForm />
					</div>
				</motion.div>
			</section>
		);
	};

	return (
		<div
			className='home-container'
			style={{ backgroundImage: `url(${bgImage})` }}>
			{renderHeroSection()}
			{renderServicesSection()}
			{renderWhyChooseUsSection()}
			{renderCallToActionSection()}
			<footer className='footer'>
				<div className='footer-title'>FUEGO SOLUTION & TECHNOLOGY</div>
				<div className='footer-links'>
					<a href='#'>Privacy</a>
					<a href='#'>Terms</a>
				</div>
				<div className='footer-copy'>
					© 2025 Fuego Solutions LLC. All rights reserved.
				</div>
			</footer>
		</div>
	);
};

export default Home;
