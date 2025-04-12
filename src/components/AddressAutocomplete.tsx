import React, { useEffect, useRef, useState } from 'react';

declare global {
	interface Window {
		google: any;
	}
}

const AddressAutocomplete: React.FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [address, setAddress] = useState('');

	useEffect(() => {
		const loadAutocomplete = () => {
			if (!window.google || !inputRef.current) return;

			const autocomplete = new window.google.maps.places.Autocomplete(
				inputRef.current,
				{
					types: ['address'],
					componentRestrictions: { country: 'us' }, // optional
				}
			);

			autocomplete.addListener('place_changed', () => {
				const place = autocomplete.getPlace();
				setAddress(place.formatted_address || '');
				console.log('Selected place:', place);
			});
		};

		loadAutocomplete();
	}, []);

	return (
		<React.Fragment>
			<input
				id='address'
				type='loc'
				placeholder='Location *'
				required
				ref={inputRef}
			/>
			{/* {address && (
				<p style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#333' }}>
					📍 Selected: <strong>{address}</strong>
				</p>
			)} */}
		</React.Fragment>
	);
};

export default AddressAutocomplete;
