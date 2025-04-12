import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ImageCarousel.css';
import extinguisherInspectionImg from '../assets/extinguisher_inspection.webp';
import fireAlarmSystemImg from '../assets/extinguisher-inspection2.jpg';
import utilityFaucetImg from '../assets/bg-16.jpg';
import emptyStaircaseImg from '../assets/empty-staircase.jpg';
import firePullStationImg from '../assets/fire-pull-station.jpg';
import rackSprinklerProtectionImg from '../assets/rack-sprinkler-protection.png';
import sprinklerSystemImg from '../assets/bg-12.avif';
import fireAlarmTwo from '../assets/fire-alarm-two.jpg';

const images = [
	fireAlarmSystemImg,
	extinguisherInspectionImg,
	utilityFaucetImg,
	rackSprinklerProtectionImg,
	sprinklerSystemImg,
	emptyStaircaseImg,
	fireAlarmTwo,
	firePullStationImg,
];

const ImageCarousel: React.FC = () => {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const nextImage = () => {
		setDirection(1);
		setIndex((prev) => (prev + 1) % images.length);
	};

	const goToIndex = (newIndex: number) => {
		setDirection(newIndex > index ? 1 : -1);
		setIndex(newIndex);
	};

	// Autoplay
	useEffect(() => {
		const timer = setInterval(() => {
			nextImage();
		}, 3000);
		return () => clearInterval(timer);
	}, [index]);

	const variants = {
		enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
		center: { x: 0, opacity: 1 },
		exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
	};

	return (
		<div className='carousel-container'>
			<div className='carousel-image-wrapper'>
				<AnimatePresence custom={direction}>
					<motion.img
						key={images[index]}
						src={images[index]}
						alt={`Slide ${index + 1}`}
						className='carousel-img'
						custom={direction}
						variants={variants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{ duration: 0.5 }}
					/>
				</AnimatePresence>
			</div>

			<div className='carousel-dots'>
				{images.map((_, i) => (
					<button
						key={i}
						className={`dot ${i === index ? 'active' : ''}`}
						onClick={() => goToIndex(i)}
					/>
				))}
			</div>
		</div>
	);
};

export default ImageCarousel;
