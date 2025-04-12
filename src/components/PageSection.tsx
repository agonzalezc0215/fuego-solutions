import React from 'react';
import bgImage from '../assets/bg-3.jpeg';
import '../styles/Services.css';
import '../styles/common.css';

interface PageSectionProps {
	title: string;
	backgroundImage?: string;
	content?: React.ReactNode;
}

const PageSection: React.FC<PageSectionProps> = ({
	title,
	content,
	backgroundImage,
}) => {
	return (
		<div
			className='common-container'
			style={{ backgroundImage: `url(${backgroundImage || bgImage})` }}>
			<section className='common-header'>
				<h1>{title}</h1>
			</section>
			<section className='common-content'>{content}</section>
		</div>
	);
};

export default PageSection;
