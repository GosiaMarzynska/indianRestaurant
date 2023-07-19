import React from 'react';
import { useRouteError } from 'react-router-dom';
import Navigation from '../components/UI/Navigation';
import Header from '../components/Header';
import PageContent from '../components/PageContent';
import ErrorSection from '../components/ErrrorSection';
import { useSelector } from 'react-redux';
import Cart from '../components/Cart/Cart';

export default function ErrorPage() {
	const error = useRouteError();
	const showCart = useSelector(state => state.ui.cartIsVisible);

	let title = 'Błąd';

	let message = 'Coś poszło nie tak!';

	if (error.status === 500) {
		message = error.data.message;
	}

	if (error.status === 404) {
		title = 'Błąd 404';
		message = 'Strona o danym adresie nie istnieje';
	}

	return (
		<>
			<Navigation />
			{showCart && <Cart />}
			<PageContent>
				<Header />
				<ErrorSection message={message} title={title} />
			</PageContent>
		</>
	);
}
