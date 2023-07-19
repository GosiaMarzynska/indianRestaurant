import React from 'react';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = () => {
	const dispatch = useDispatch();
	const totalQuantity = useSelector(state => state.cart.totalQuantity);
	const toggleCartHandler = () => {
		dispatch(uiActions.toggle());
	};

	return (
		<button className={classes.button} onClick={toggleCartHandler}>
			<p className={classes.badge}>
				<span className={classes.icon}>
					<i className='fa-solid fa-cart-shopping'></i>
				</span>
			{totalQuantity > 0 ? <span className={classes.quantity}>{totalQuantity} </span> : null }
			</p>
		</button>
	);
};

export default CartButton;
