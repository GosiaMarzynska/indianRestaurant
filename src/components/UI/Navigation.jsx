import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import classes from './Navigation.module.css';
import { useState, useEffect } from 'react';
import CartButton from '../../components/Cart/CartButton';


export default function Navigation() {
	const [isActive, setIsActive] = useState(false);
	const [show, setShow] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (typeof window !== 'undefined') {
			if (window.scrollY < 80) {
				setShow(false);
			} else if (window.scrollY > lastScrollY) {
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
				<HashLink to='/menu#menu' className={classes['nav-link']} onClick={closeNavWindow}>
					Menu
				</HashLink>
				<HashLink to='/rezerwacje#rezerwacje' className={classes['nav-link']} onClick={closeNavWindow}>
					Rezerwacje
				</HashLink>
				<HashLink to='/kontakt#kontakt' className={classes['nav-link']} onClick={closeNavWindow}>
					Kontakt
				</HashLink>
			</div>

			<div className={navBarClasses}>
				<img className={classes['nav-logo']} src='src\assets\logo\logo-small.png' alt='logo restauracji' />
				<Link to='/' className={classes['nav-item']}>
					Home
				</Link>
				<HashLink to='/menu#menu' className={classes['nav-item']}>
					Menu
				</HashLink>
				<HashLink to='/rezerwacje#rezerwacje' className={classes['nav-item']}>
					Rezerwacje
				</HashLink>
				<HashLink to='/kontakt#kontakt' className={classes['nav-item']}>
					Kontakt
				</HashLink>
			</div>
		</nav>
	);
}
