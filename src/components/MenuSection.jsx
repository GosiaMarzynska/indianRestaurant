import { Link } from 'react-router-dom';
import classes from "./MenuSection.module.css"

export default function MenuSection() {
	return (
		<Link to='/menu'>
			<section className={classes['menu-section']}>
				<h2 className={classes['title-small']}>Menu</h2>
				<h2 className={classes['title-big']}>Odkryj smaki Indii</h2>				
			</section>
		</Link>
	);
}
