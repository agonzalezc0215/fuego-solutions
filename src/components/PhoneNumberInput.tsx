import React, { useState } from 'react';

interface PhoneInputProps {
	value?: string;
	required?: boolean;
	onChange?: (phone: string) => void;
}

const PhoneNumberInput: React.FC<PhoneInputProps> = ({
	value = '',
	required = true,
	onChange,
}) => {
	const [phone, setPhone] = useState(value);
	const [error, setError] = useState('');

	const formatPhone = (value: string) => {
		const numbers = value.replace(/\D/g, '');
		const match = numbers.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

		if (!match) return value;

		let formatted = '';
		if (match[1]) formatted += `(${match[1]}`;
		if (match[1] && match[1].length === 3) formatted += ') ';
		if (match[2]) formatted += match[2];
		if (match[2] && match[2].length === 3) formatted += '-';
		if (match[3]) formatted += match[3];

		return formatted;
	};

	const validatePhone = (value: string) => {
		const cleaned = value.replace(/\D/g, '');
		return cleaned.length === 10;
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		const formatted = formatPhone(val);
		setPhone(formatted);
		if (onChange) onChange(formatted);

		if (required && formatted.trim() === '') {
			setError('Phone number is required');
		} else if (!validatePhone(formatted)) {
			setError('Enter a valid 10-digit US phone number');
		} else {
			setError('');
		}
	};

	return (
		<input
			id='phone'
			type='tel'
			placeholder='Phone e.g. (123) 456-7890 *'
			value={phone}
			onChange={handleChange}
			className={error ? 'input-required' : ''}
		/>
	);
};

export default PhoneNumberInput;
