import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './Cart/CartItem';
import Checkout from './Cart/Checkout';
import classes from './Order.module.css';
import { cartActions } from '../store/cart-slice';
import Section from './UI/Section';
import { Link } from 'react-router-dom';
import Button from './UI/Button';

const URL_ORDER = 'https://react-http-b7d60-default-rtdb.europe-west1.firebasedatabase.app/orders.json';

export default function Order() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);
	const [error, setError] = useState(null);
	const productsArray = useSelector(state => state.cart.items);
	const finalCost = useSelector(state => state.cart.finalPrice);
	const cart = useSelector(state => state.cart);
	const dispatch = useDispatch();

	const orderNumber = Math.floor(Math.random() * (1000000 - 100000) + 100000);

	const cartProducts = productsArray.map(product => (
		<CartItem
			key={product.id}
			item={{
				name: product.name,
				quantity: product.quantity,
				total: product.totalPrice,
				price: product.price,
				id: product.id,
			}}
		/>
	));

	const hasItems = cartProducts.length > 0;

	const sumbitOrderHandler = async userData => {
		setIsSubmitting(true);
		try {
			const response = await fetch(URL_ORDER, {
				method: 'POST',
				body: JSON.stringify({ orderNumber: orderNumber, user: userData, orderedItems: cart }),
			});

			if (!response.ok) {
				throw new Error('Request failed!');
			}
		} catch (error) {
			setError(error.message || 'Something went wrong!');
		}

		setIsSubmitting(false);
		setDidSubmit(true);
		dispatch(cartActions.clearCart());
	};

	const cartModalContent = (
		<>
			<div className={classes.cart}>
				<h2>Koszyk:</h2>
				<ul>{cartProducts}</ul>
				<p className={classes['final-cost']}>
					Razem:<span className={classes.sum}>{finalCost}zł</span>
				</p>
			</div>
			{hasItems && <Checkout onConfirm={sumbitOrderHandler} error={error} />}
			{!hasItems && (
				<Link to='/menu'>
					<Button text='Powrót do menu' />
				</Link>
			)}
		</>
	);

	const isSubmittingModalContent = <p>Przesyłam zamówienie...</p>;

	const didSubmitModalContent = (
		<>
			<h3 className={classes['order-message']}>Otrzymaliśmy Twoje zamówienie!</h3>
			<p className={classes['order-info']}>
				Twoje zamównienie nr <span className={classes['order-number']}>{orderNumber} </span>zostało złożone. Na maila
				otrzymasz informacje z godziną przyjazdu dostawcy.
			</p>
			<div className={classes.actions}></div>
			<Link to='/menu'>
				<Button text='Powrót do menu' />
			</Link>
		</>
	);

	return (
		<Section title='Zamówienie'>
			{!isSubmitting && !didSubmit && cartModalContent}
			{isSubmitting && isSubmittingModalContent}
			{didSubmit && didSubmitModalContent}
		</Section>
	);
}
