import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/UI/Navigation';
import Cart from '../components/Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { sendCartData, fetchCartData } from '../store/cart-actions';

let isInitial = true;

export default function RootLayout() {
	const cart = useSelector(state => state.cart);
	const dispatch = useDispatch();
	const showCart = useSelector(state => state.ui.cartIsVisible);

	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}
		if (cart.changed) {
			dispatch(sendCartData(cart));
		}
	}, [cart, dispatch]);

	return (
		<>
			<Navigation />
			{showCart && <Cart />}
			<main>
				<Outlet />
			</main>
		</>
	);
}
