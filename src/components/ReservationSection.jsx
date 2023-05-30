import classes from './ReservationSection.module.css';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';

export default function ReservationSection() {
	return (
		<section className={classes.reservation}>
			<h2 className={classes.title}>Rezerwacja</h2>
			<p className={classes.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugit impedit vero quaerat libero ullam similique
				officia. Quidem vitae, ab assumenda repellat doloremque quisquam illo id non ratione dolore. Praesentium, esse?
				Hic cumque quod iusto quasi incidunt magnam adipisci alias vero sint molestiae, quas labore optio tempora animi
				voluptas ex?
			</p>
			<Link to='/rezerwacje'>
				<Button text='Zarezerwuj' />
			</Link>
		</section>
	);
}
