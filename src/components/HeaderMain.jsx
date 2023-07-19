import React from 'react';
import classes from './HeaderMain.module.css';

export default function HeaderMain() {
	return (
		<header className={classes.background}>
			<h1 className={classes['hidden-title']}>Namaste Indian Cuizine Kuchnia Indyjska</h1>
			<img className={classes.logo} src='src\assets\logo\logo-namaste.png' alt='logo restauracji' />
			<p className={classes.phone}>
				<i className='fa-solid fa-phone' alt='telefon do restauracji'></i> +48 737 167 040
			</p>
			<a className={classes.arrow} href='#about-us'>
				<i className='fa-sharp fa-solid fa-circle-chevron-down'></i>
			</a>
		</header>
	);
}
