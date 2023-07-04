import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

const URL = 'https://react-deployment-demo-b053a-default-rtdb.europe-west1.firebasedatabase.app/cart.json';



export const fetchCartData = () => {
	return async dispatch => {
		const fetchData = async () => {
			const response = await fetch(URL);

			if (!response.ok) {
				throw new Error('Could not fetch cart data!');
			}

			const data = await response.json();

			return data;
		};

		try {
			const cartData = await fetchData();
			dispatch(
				cartActions.replaceCart({
					items: cartData.items || [],
					totalQuantity: cartData.totalQuantity,
					finalPrice: cartData.finalPrice,
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Fetching cart data failed!',
				})
			);
		}
	};
};

export const sendCartData = cart => {
	return async dispatch => {
		dispatch(
			uiActions.showNotification({
				status: 'pending',
				title: 'Oczekiwanie...',
				message: 'Twój zamówienie zostaje zaktualizowane',
			})
		);

		const sendRequest = async () => {
			console.log('Putting ' + JSON.stringify(cart))
			const response = await fetch(URL, {
				method: 'PUT',
				body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity, finalPrice: cart.finalPrice }),
			});

			if (!response.ok) {
				throw new Error('Sending cart data failed.');
			}
		};
		try {
			await sendRequest();

			dispatch(
				uiActions.showNotification({
					status: 'success',
					title: 'Dodano',
					message: 'Do koszyka dodano produkt',
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Błąd!',
					message: 'Nie udało się dodać do zamówienia',
				})
			);
		}
	};
};
