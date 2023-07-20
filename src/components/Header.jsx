import React from 'react';
import classes from './Header.module.css';

export default function Header() {
	return (
		<header className={classes.background}>
			<h1 className={classes['hidden-title']}>Namaste Indian Cuizine Kuchnia Indyjska Menu</h1>
			<img className={classes.logo} src='/assets/logo/logo-namaste-b.png' />
		</header>
	);
}
