import classes from './Reservation.module.css';

export default function Reservation() {
	return (
		<section className={classes.reservation}>
			<h2 className={classes.title}>Reserwacje</h2>
			<div className={classes.meals}></div>
		</section>
	);
}
