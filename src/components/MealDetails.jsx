import React, { useState } from 'react';
import NumberInput from '../components/UI/NumberInput';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import classes from './MealDetails.module.css';

export default function MealDetails(props) {
	const [counter, setCounter] = useState(1);

	const dispatch = useDispatch();

	const { name, id, description, price } = props;

	const addToCartHandler = () => {
		dispatch(cartActions.addItem({ id, name, price, counter }));
	};

	return (
		<div className={classes.description}>
			<p className={classes.text}>{description}</p>
			<div className={classes.order}>
				<NumberInput counter={counter} setCounter={setCounter} />
				<button onClick={addToCartHandler} className={classes[`add-btn`]}>
					Dodaj <i className='fa-solid fa-cart-arrow-down'></i>
				</button>
			</div>
		</div>
	);
}
