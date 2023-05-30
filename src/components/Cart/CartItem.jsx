import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = props => {
	const { name, price, quantity, id, total } = props.item;
	const dispatch = useDispatch();

	const addClickHandler = () => {
        const counter=1;
		dispatch(cartActions.addItem({ id, price, name, counter }));
	};

	const removeClickHandler = () => {
		dispatch(cartActions.removeItem( id));
	};

	return (
		<li className={classes.item}>
			<header>
				<h3>{name}</h3>
				<div className={classes.price}>
					{total} zł <span className={classes.itemprice}>({price}zł/szt)</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={removeClickHandler}>-</button>
					<button onClick={addClickHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
