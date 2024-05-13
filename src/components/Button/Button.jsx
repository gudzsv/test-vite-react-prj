// Button.jsx

import clsx from 'clsx';
import css from './Button.module.css';
import { useState } from 'react';

export const Button = ({ variant, children }) => {
	const [clicks, setClicks] = useState(0);
	const handleClick = () => {
		setClicks(clicks + 1);
	};
	return (
		<button onClick={handleClick} className={clsx(css.button, css[variant])}>
			{children} Click:{clicks}
		</button>
	);
};
