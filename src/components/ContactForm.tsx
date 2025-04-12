import React from 'react';
import '../styles/ContactForm.css'; // Assuming you have a CSS file for styling
import AddressAutocomplete from './AddressAutocomplete';
import EmailInput from './EmailInput';
import PhoneNumberInput from './PhoneNumberInput';

export const ContactForm: React.FC = () => {
	return (
		<form className='contact-form'>
			<h2>Request A Free Consultation</h2>
			<p>
				Have questions about Fuego Solutions services or compliance standards?
				Fill out the form below with your inquiry, and a member of our technical
				team will get back to you promptly.
			</p>
			<div className='form-row'>
				<input type='text' placeholder='First Name *' required />
				<input type='text' placeholder='Last Name *' required />
			</div>

			<div className='form-row'>
				<PhoneNumberInput onChange={(phone) => console.log('Phone:', phone)} />
				<EmailInput />
			</div>

			<div className='form-row'>
				<AddressAutocomplete />
			</div>
			<div className='form-row'>
				<input type='comp-name' placeholder='Company Name' />
			</div>
			<div className='form-row n-gap'>
				<p>Which of our fire protection options are you interested in?</p>
				<select required defaultValue='' className='form-select'>
					<option value='extinguishers'>Fire Extinguisher Services</option>
					<option value='alarms'>Fire Alarm Systems</option>
					<option value='sprinklers'>Fire Sprinkler Systems</option>
					<option value='training'>Consultation & Training</option>
					<option value='suppression'>Fire Suppression Systems</option>
					<option value='safety-plans'>Fire Safety Plans</option>
					<option value='inspections'>Maintenance & Inspections</option>
					<option value='inspections'>Communication Systems</option>
					<option value='inspections'>Monitoring Services</option>
					<option value='inspections'>Installation</option>
				</select>
			</div>
			<div className='form-row n-gap'>
				<p>How were you referred to Fuego Solutions?'</p>
				<select required defaultValue='' className='form-select'>
					<option value='google'>Google Search</option>
					<option value='social-media'>Social Media</option>
					<option value='existing-client'>Current or Past Client</option>
					<option value='advertisement'>Advertisement</option>
					<option value='other'>Other</option>
				</select>
			</div>
			<div className='form-row n-gap grid-display'>
				<p>Include any notes or details relevant to your inquiry</p>
				<textarea placeholder='Notes' rows={4} />
			</div>

			<small className='note'>* indicates required fields</small>
			<button className='btn-primary btn-call submit-btn' onClick={() => {}}>
				Submint
			</button>
		</form>
	);
};
