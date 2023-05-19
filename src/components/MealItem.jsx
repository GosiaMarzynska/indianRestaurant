import classes from './MealItem.module.css';

export default function MealItem(props) {
	return (
		<div className={classes[`meal-item`]}>
			<img className={classes.img} src={props.imgSmall} />
			<div className={classes.text}>
				<p className={classes.name}>{props.name}</p>
				<p className={classes.price}>{props.price} zł</p>
			</div>
		</div>
	);
}
