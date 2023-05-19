import classes from './Header.module.css';

export default function Header() {
	return (
		<header className={classes.background}>
			<h1 className={classes['hidden-title']}>Namaste Indian Cuizine Kuchnia Indyjska Menu</h1>
			<img className={classes.logo} src='src\assets\logo\logo-namaste.png' alt='logo restauracji' />
			{/* <p className={classes.phone}>
				<i className='fa-solid fa-phone' alt='telefon do restauracji'></i> +48 737 167 040
			</p> */}
		
		</header>
	);
}
