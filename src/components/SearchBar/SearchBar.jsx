import { useState } from 'react';

const SearchBar = () => {
	const [searchValue, setSearchValue] = useState('');

	const handleChange = (evt) => {
		setSearchValue(evt.target.value);
	};

	return (
		<div>
			<input type='text' value={searchValue} onChange={handleChange} />
			<p>{searchValue}</p>
		</div>
	);
};

export default SearchBar;
