import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = props => {
	const { name, price, quantity, id, total } = props.item;
	const dispatch = useDispatch();

	const addClickHandler = () => {
		const counter = 1;
		dispatch(cartActions.addItem({ id, price, name, counter }));
	};

	const removeClickHandler = () => {
		dispatch(cartActions.removeItem(id));
	};

	return (
		<li className={classes.item}>
			<header>
				<p className={classes.name}>{name}</p>
				<div className={classes.price}>
					{total} zł <span className={classes.itemprice}>({price}zł/szt)</span>
				</div>
			</header>
			<div className={classes.details}>
				<span className={classes.quantity}>x{quantity}</span>
				<div className={classes.actions}>
					<button className={classes['counter-button']} onClick={removeClickHandler}>
						-
					</button>
					<button className={classes['counter-button']} onClick={addClickHandler}>
						+
					</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
