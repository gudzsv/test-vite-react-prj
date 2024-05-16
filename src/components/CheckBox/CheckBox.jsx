import { useState } from 'react';

const CheckBox = () => {
	const [checked, setChecked] = useState(false);
	const handleChecked = (evt) => {
		setChecked(evt.target.checked);
	};
	return (
		<div>
			<label>
				<input
					type='checkbox'
					name='terms'
					checked={checked}
					onChange={handleChecked}
				/>
				I accept terms and conditions
			</label>
			<button type='button' disabled={!checked}>
				Proceed
			</button>
		</div>
	);
};

export default CheckBox;
