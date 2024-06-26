import { Alert } from './Alert/Alert';
import './App.css';
import BookList from './BookList';
import Card from './Card';
import Product from './Product';
import { Button } from './Button/Button';
import { UserMenu } from './UserMenu/UserMenu';
import CustomButton from './CustomButton/CustomButton';
import SearchBar from './SearchBar/SearchBar';
import LoginForm from './LoginForm/LoginForm';
import { useState } from 'react';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import RadioButtons from './RadioButtons/RadioButtons';
import CheckBox from './CheckBox/CheckBox';
import FormikFeedbackForm from './FormikFeedbackForm/FormikFeedbackForm';

function App() {
	const favoriteBooks = [
		{ id: 'id-1', name: 'JS for beginners' },
		{ id: 'id-2', name: 'React basics' },
		{ id: 'id-3', name: 'React Router overview' },
	];

	const [lang, setLang] = useState('uk');

	return (
		<>
			<div>
				<p>Selected language: {lang}</p>
				<LangSwitcher value={lang} onSelect={setLang} />
			</div>
			<h3>SearchBar</h3>
			<SearchBar />
			<UserMenu name='gudzsv'>{'gudzsv'}</UserMenu>
			<hr />
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
			<Alert variant='info' outlined='true'>
				Please Update your email!
			</Alert>
			<Alert variant='error'>There was an error during transaction!</Alert>
			<Alert variant='success' elevated='true'>
				Payment received, thank you for your purchase!
			</Alert>
			<Button variant='primary'>Login</Button>
			<Button variant='secondary'>Follow</Button>
			<CustomButton message='Playing music!'>Play some music</CustomButton>
			<CustomButton message='Uploading your data!'>Upload data</CustomButton>
			<LoginForm />
			<hr />
			<RadioButtons />
			<hr />
			<CheckBox />
			<hr />
			<FormikFeedbackForm />
		</>
	);
}

export default App;
