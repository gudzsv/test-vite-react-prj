import { HiUser } from 'react-icons/hi';
import { FaRegUserCircle } from 'react-icons/fa';

export const UserMenu = ({ name }) => {
	return (
		<div>
			<p>
				<HiUser className='my-icon' size='24' color='tomato' /> {name}
			</p>
		</div>
	);
};
