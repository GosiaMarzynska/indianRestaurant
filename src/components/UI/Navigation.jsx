import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';
import { useState, useEffect } from 'react';
import CartButton from '../../components/Cart/CartButton';

export default function Navigation() {
	const [isActive, setIsActive] = useState(false);
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (typeof window !== 'undefined') {
			if (window.scrollY > lastScrollY) {
				setShow(false);
			} else {
				setShow(true);
			}

			setLastScrollY(window.scrollY);
		}
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', controlNavbar);

			return () => {
				window.removeEventListener('scroll', controlNavbar);
			};
		}
	}, [lastScrollY]);

	let navBarClasses = show ? `${classes['nav-desktop']} ${classes.hidden}` : classes['nav-desktop'];

	const openNavWindow = () => {
		setIsActive(prev => !prev);
	};

	const closeNavWindow = () => {
		setIsActive(false);
	};

	return (
		<nav className={`${classes['nav-container']} ${classes.section}`}>
			<CartButton />
			<div className={classes['burger-btn']} onClick={openNavWindow}>
				<div className={classes['burger-btn-box']}>
					<div className={classes['burger-btn-bars']}></div>
				</div>
			</div>

			<div
				className={classes['nav-mobile']}
				style={isActive ? { transform: 'translateX(0)' } : { transform: 'translateX(-102%)' }}>
				<img className={classes.logo} src='src\assets\logo\logo-small.png' alt='logo restauracji' />
				<Link to='/' className={classes['nav-link']} onClick={closeNavWindow}>
					Home
				</Link>
				<Link to='/menu' className={classes['nav-link']} onClick={closeNavWindow}>
					Menu
				</Link>
				<Link to='/rezerwacje' className={classes['nav-link']} onClick={closeNavWindow}>
					Rezerwacje
				</Link>
				<Link to='/kontakt' className={classes['nav-link']} onClick={closeNavWindow}>
					Kontakt
				</Link>
			</div>

			<div className={navBarClasses}>
				<img className={classes['nav-logo']} src='src\assets\logo\logo-small.png' alt='logo restauracji' />
				<Link to='/' className={classes['nav-item']}>
					Home
				</Link>
				<Link to='/menu' className={classes['nav-item']}>
					Menu
				</Link>
				<Link to='/rezerwacje' className={classes['nav-item']}>
					Rezerwacje
				</Link>
				<Link to='/kontakt' className={classes['nav-item']}>
					Kontakt
				</Link>
			</div>
		</nav>
	);
}
