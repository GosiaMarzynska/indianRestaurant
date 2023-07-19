import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import { uiActions } from '../../store/ui-slice';
import { HashLink } from 'react-router-hash-link';

const Cart = () => {
	const productsArray = useSelector(state => state.cart.items);
	const finalCost = useSelector(state => state.cart.finalPrice);
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

	const hasItems = cartProducts.length > 0;

	const closeModal = () => {
		dispatch(uiActions.toggle());
	};

	const modalActions = (
		<div className={classes.actions}>
			<button onClick={closeModal} className={classes['close-button']}>
				Zamknij
			</button>
			{hasItems && (
				<HashLink to='/zamowienie#zamowienie'>
					<button onClick={closeModal} className={classes.button}>
						Zamów
					</button>
				</HashLink>
			)}
		</div>
	);

	const cartModalContent = (
		<>
			<div className={classes.cart}>
				<h2>Twoje zamówienie:</h2>
				<ul className={classes.products}>{cartProducts}</ul>
				<p className={classes['final-cost']}>
					Razem:<span className={classes.sum}>{finalCost}zł</span>
				</p>
			</div>
			{modalActions}
		</>
	);

	const emtyCart = (
		<div className={classes.cart}>
			<p className={classes.info}>Twój koszyk jest pusty</p>
			{modalActions}
		</div>
	);

	return <Modal closeModal={closeModal}>{hasItems ? cartModalContent : emtyCart}</Modal>;
};

export default Cart;
