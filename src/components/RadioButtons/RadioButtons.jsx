import { useEffect, useState } from 'react';

const LS_KEY = 'coffee-size';
const lsSize = () => {
	return localStorage.getItem(LS_KEY) !== null
		? localStorage.getItem(LS_KEY)
		: 'sm';
};

const RadioButtons = () => {
	const [size, setSize] = useState(lsSize);

	useEffect(() => {
		localStorage.setItem(LS_KEY, size);
	}, [size]);

	const handleChange = (evt) => {
		setSize(evt.target.value);
	};

	return (
		<>
			<h1>Select coffee size</h1>
			<label>
				<input
					type='radio'
					name='coffeeSize'
					value='sm'
					checked={size === 'sm'}
					onChange={handleChange}
				/>
				Small
			</label>
			<label>
				<input
					type='radio'
					name='coffeeSize'
					value='md'
					checked={size === 'md'}
					onChange={handleChange}
				/>
				Medium
			</label>
			<label>
				<input
					type='radio'
					name='coffeeSize'
					value='lg'
					checked={size === 'lg'}
					onChange={handleChange}
				/>
				Large
			</label>
		</>
	);
};

export default RadioButtons;
