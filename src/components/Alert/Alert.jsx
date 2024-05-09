// const getBgColor = (variant) => {
// 	switch (variant) {
// 		case 'info':
// 			return 'blue';
// 		case 'success':
// 			return 'green';
// 		case 'error':
// 			return 'red';
// 		case 'warning':
// 			return 'orange';
// 		default:
// 			throw new Error(`Unsupported variant prop value - ${variant}`);
// 	}
// };
import clsx from 'clsx';
import './Alert.css';

export const Alert = ({ variant, outlined, elevated, children }) => {
	return (
		<p
			className={clsx('alert', variant, {
				'is-outlined': outlined,
				'is-elevated': elevated,
			})}
		>
			{children}
		</p>
	);
};
