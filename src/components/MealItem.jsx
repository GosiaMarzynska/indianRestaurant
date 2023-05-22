import MealDetails from './MealDetails';
import classes from './MealItem.module.css';

export default function MealItem(props) {
	return (
		<div
			className={props.isActive ? `${classes.active} ${classes['meal-item']}` : `${classes['meal-item']}`}
			onClick={props.clickHandler}>
			<div className={classes.basic}>
				<img className={classes.img} src={props.imgSmall} />
				<div className={classes.text}>
					<p className={classes.name}>{props.name}</p>
					<p className={classes.price}>{props.price} zł</p>
				</div>
			</div>
			{props.isActive && <MealDetails description={props.description} />}
		</div>
	);
}

`${classes.box} ${classes['box-desktop']}`;
