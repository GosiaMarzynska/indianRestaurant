import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import Checkout from './Checkout';
import { cartActions } from '../../store/cart-slice';
import { uiActions } from '../../store/ui-slice';


const URL_ORDER = 'https://react-http-b7d60-default-rtdb.europe-west1.firebasedatabase.app/orders.json';

const Cart = props => {
	const [isOrdered, setIsOrdered] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);
	const [error, setError] = useState(null);
	const productsArray = useSelector(state => state.cart.items);
	const finalCost = useSelector(state => state.cart.finalPrice);
	const notification = useSelector(state => state.ui.notification);
	const cart = useSelector(state => state.cart);
	const dispatch = useDispatch();

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

	const hastItems = cartProducts.length > 0;
	
	const orderHandler = () => {
		setIsOrdered(true);
	};
	const closeModal = () => {
		dispatch(uiActions.toggle());
	};
	
	const sumbitOrderHandler = async userData => {
		setIsSubmitting(true);
		try {
			const response = await fetch(URL_ORDER, {
				method: 'POST',
				body: JSON.stringify({ user: userData, orderedItems: cart }),
			});

			if (!response.ok) {
				throw new Error('Request failed!');
			}
		} catch (error) {
			setError(error.message || 'Something went wrong!');
		}

		setIsSubmitting(false);
		setDidSubmit(true);
		dispatch(cartActions.clearCart);
	};

	const modalActions = (
		<div className={classes.actions}>
			<button onClick={closeModal} className={classes['close-button']}>
				Zamknij
			</button>
			{hastItems && (
				<button className={classes.button} onClick={orderHandler}>
					Zamów
				</button>
			)}
		</div>
	);

	const cartModalContent = (
		<>
			<div className={classes.cart}>
				<h2>Twoje zamówienie:</h2>
				<ul>{cartProducts}</ul>
				<p className={classes['final-cost']}>Razem:<span className={classes.sum}>{finalCost}zł</span></p>
			</div>
			{isOrdered && <Checkout onConfirm={sumbitOrderHandler} onCancel={props.onCancel} error={error} />}
			{!isOrdered && modalActions}
		</>
	);

	const isSubmittingModalContent = <p>Przesyłam zamówienie...</p>;

	const didSubmitModalConstet = (
		<>
			<p>{notification.message || ''}</p>
			<div className={classes.actions}>
				<button onClick={closeModal} className={classes['close-button']}>
					Zamknij
				</button>
			</div>
		</>
	);
	

	return (
		<Modal closeModal={closeModal}>
			{!isSubmitting && !didSubmit && cartModalContent}
			{isSubmitting && isSubmittingModalContent}
			{didSubmit && didSubmitModalConstet}
		</Modal>
	);
};

export default Cart;
