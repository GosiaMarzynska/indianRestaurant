import { Link } from 'react-router-dom';
import classes from "./MenuSection.module.css"

export default function MenuSection() {
	return (
		<Link to='/menu'>
			<section className={classes['menu-section']}>
				<h2 className={classes.title}>Menu</h2>				
			</section>
		</Link>
	);
}
