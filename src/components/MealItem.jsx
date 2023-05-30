import MealDetails from './MealDetails';
import classes from './MealItem.module.css';

export default function MealItem(props) {
const {name, imgSmall, price, description, id} = props;

	return (
		<div
			className={props.isActive ? `${classes.active} ${classes['meal-item']}` : `${classes['meal-item']}`}
			onClick={props.clickHandler}>
			<div className={classes.basic}>
				<img className={classes.img} src={imgSmall} />
				<div className={classes.text}>
					<p className={classes.name}>{name}</p>
					<p className={classes.price}>{price} zł</p>
				</div>
			</div>
			{props.isActive && <MealDetails  name={name} description={description} id={id} price={price} />}
		</div>
	);
}

`${classes.box} ${classes['box-desktop']}`;
