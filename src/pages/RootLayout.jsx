import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/UI/Navigation';
import Cart from '../components/Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import Notification from '../components/UI/Notification';
import { sendCartData, fetchCartData } from '../store/cart-actions';

let isInitial = true;

export default function RootLayout() {
	const dispatch = useDispatch();
	const showCart = useSelector(state => state.ui.cartIsVisible);
	const cart = useSelector(state => state.cart);
	const notification = useSelector(state => state.ui.notification);

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
			{notification && (
				<Notification status={notification.status} title={notification.title} message={notification.message} />
			)}
			<Navigation />
			{showCart && <Cart />}
			<main>
				{/* {navigation.state=== 'loading'  && <p>Loading...</p> } */}
				<Outlet />
			</main>
		</>
	);
}
