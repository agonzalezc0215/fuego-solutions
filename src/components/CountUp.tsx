import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
	end: number;
	suffix: string;
	duration?: number; // Optional prop
}

const CountUp: React.FC<CountUpProps> = ({ end, suffix, duration = 2000 }) => {
	const [count, setCount] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					let start = 0;
					const increment = end / (duration / 16);
					const interval = setInterval(() => {
						start += increment;
						if (start >= end) {
							setCount(end);
							clearInterval(interval);
						} else {
							setCount(Math.floor(start));
						}
					}, 16);
				}
			},
			{ threshold: 0.6 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [end, duration]);

	return (
		<div ref={ref}>
			<span>
				{count}
				{suffix}
			</span>
		</div>
	);
};

export default CountUp;
