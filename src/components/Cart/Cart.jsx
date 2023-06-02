import { useSelector, useDispatch } from 'react-redux';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import { uiActions } from '../../store/ui-slice';
import { Link } from 'react-router-dom';

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

	const hastItems = cartProducts.length > 0;
	
	const closeModal = () => {
		dispatch(uiActions.toggle());
	};

	const modalActions = (
		<div className={classes.actions}>
			<button onClick={closeModal} className={classes['close-button']}>
				Zamknij
			</button>
			{hastItems && (
				<Link to='/zamowienie'>
					<button className={classes.button}>
						Zamów
					</button>
				</Link>
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

	return <Modal closeModal={closeModal}>{cartModalContent}</Modal>;
};

export default Cart;
