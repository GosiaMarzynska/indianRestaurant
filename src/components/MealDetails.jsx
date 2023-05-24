import NumberInput from '../UI/NumberInput';
import classes from './MealDetails.module.css';

export default function MealDetails(props) {
	return (
		<div className={classes.description}>
			<p className={classes.text}>{props.description}</p>
			<div className={classes.order}>
				<NumberInput />
				<button className={classes[`add-btn`]}>
					Dodaj <i className='fa-solid fa-cart-arrow-down'></i>
				</button>
			</div>
		</div>
	);
}
