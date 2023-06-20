import classes from './Header.module.css';

export default function Header() {
	return (
		<header className={classes.background}>
			<h1 className={classes['hidden-title']}>Namaste Indian Cuizine Kuchnia Indyjska Menu</h1>
			<img className={classes.logo} src='src\assets\logo\logo-namaste-b.png' alt='logo restauracji' />
			{/* <div className={classes.info}>
				<div className={classes.text}>
					<p className={classes.phone}>
						<i className='fa-solid fa-phone' alt='telefon do restauracji'></i> +48 737 167 040
					</p>
					<Link to='menu'>Menu</Link>
				</div>
			</div> */}
		</header>
	);
}
