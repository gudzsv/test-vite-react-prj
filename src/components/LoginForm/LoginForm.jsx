import { useEffect, useId, useState } from 'react';

const defaultFormData = {
	login: '',
	password: '',
};

const getLSFData = () => {
	return localStorage.getItem('login-form') !== null
		? JSON.parse(localStorage.getItem('login-form'))
		: defaultFormData;
};

const LoginForm = () => {
	const [formData, setFormData] = useState(getLSFData);

	useEffect(() => {
		localStorage.setItem('login-form', JSON.stringify(formData));
	}, [formData]);

	const id = useId();

	const handleChange = (evt) => {
		setFormData({
			...formData,
			[evt.target.name]: evt.target.value,
		});
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(formData);
		setFormData(defaultFormData);
	};

	return (
		<>
			<hr />
			<h2>Please login to your account!</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor={id + 'login'}>Login</label>
				<input
					id={id + 'login'}
					onChange={handleChange}
					type='text'
					name='login'
					value={formData.login}
				/>
				<label htmlFor={id + 'password'}>Login</label>
				<input
					id={id + 'password'}
					onChange={handleChange}
					type='password'
					name='password'
					value={formData.password}
				/>
				<button type='submit'>Login</button>
			</form>
		</>
	);
};
export default LoginForm;
