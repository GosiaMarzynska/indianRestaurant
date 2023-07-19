import React from 'react';
import { HashLink } from "react-router-hash-link";
import classes from "./MenuSection.module.css"

export default function MenuSection() {
	return (
		<HashLink to='/menu#menu' smooth>
			<section className={classes['menu-section']}>
				<h2 className={classes['title-small']}>Menu</h2>
				<h2 className={classes['title-big']}>Odkryj smaki Indii</h2>				
			</section>
		</HashLink>
	);
}
