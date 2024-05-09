const BookList = ({ books }) => {
	return (
		<ul>
			{books.map((book) => {
				return (
					<li style={listStyles} key={book.id}>
						{book.name}
					</li>
				);
			})}
		</ul>
	);
};

const listStyles = {
	listStyle: 'none',
	color: 'tomato',
};

export default BookList;
