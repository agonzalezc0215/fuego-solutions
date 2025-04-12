import React, { useState } from 'react';

interface EmailInputProps {
	value?: string;
	required?: boolean;
	onChange?: (email: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({
	value = '',
	required = true,
	onChange,
}) => {
	const [email, setEmail] = useState(value);
	const [error, setError] = useState('');

	const validateEmail = (value: string) => {
		const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
		return isValid;
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		setEmail(val);
		if (onChange) onChange(val);

		if (required && !val) {
			setError('Email is required');
		} else if (!validateEmail(val)) {
			setError('Please enter a valid email address');
		} else {
			setError('');
		}
	};

	return (
		<React.Fragment>
			<input
				id='email'
				type='email'
				placeholder='Email e.g. you@example.com *'
				required
				value={email}
				className={error ? 'input-required' : ''}
				onChange={handleChange}
			/>
			{/* {error && (
				<small style={{ color: '#e63946', marginTop: 4, display: 'block' }}>
					{error}
				</small>
			)} */}
		</React.Fragment>
	);
};

export default EmailInput;
