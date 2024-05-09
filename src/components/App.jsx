import { Alert } from './Alert';
import './App.css';
import BookList from './BookList';
import Card from './Card';
import Product from './Product';

function App() {
	const favoriteBooks = [
		{ id: 'id-1', name: 'JS for beginners' },
		{ id: 'id-2', name: 'React basics' },
		{ id: 'id-3', name: 'React Router overview' },
	];
	return (
		<>
			<h1>Products</h1>
			<Product
				name='Tacos With Lime'
				imgUrl='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640'
				price={10.99}
			></Product>
			<Product
				name='Fries and Burger'
				imgUrl='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640'
				price={14.29}
			/>

			<h2>Books of the week</h2>
			<BookList books={favoriteBooks} />

			<h2>Card children</h2>
			<Card title='CARD'>
				<h3>Card children title</h3>
				<p>
					<b>Card</b>
					children tex here children it is Like template
				</p>
			</Card>
			<Alert>Please Update your email!</Alert>
			<Alert>There was an error during transaction!</Alert>
			<Alert>Payment received, thank you for your purchase!</Alert>
		</>
	);
}

export default App;
