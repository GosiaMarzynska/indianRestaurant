import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';
import { useState } from 'react';
import CartButton from '../../components/Cart/CartButton';

export default function Navigation() {
	const [isActive, setIsActive] = useState(false);

	const openNavWindow = () => {
		setIsActive(prev => !prev);
	};

	const closeNavWindow = () => {
		setIsActive(false);
	};

	// allNavItems.forEach(item => {
	//     item.addEventListener('click', () => {
	//         navMobile.classList.remove('nav-mobile--active');
	//     });
	// });

	// const handleObserver = () => {
	//     const currentSection = window.scrollY;
	//     console.log('Scroll Y:' + currentSection);
	//     console.log(allSection);
	//     allSection.forEach(section => {
	//         if (section.classList.contains('color-section') && section.offsetTop <= currentSection + 50) {
	//             navBtnBars.classList.add('white-bars-color');
	//         } else if (!section.classList.contains('color-section') && section.offsetTop <= currentSection + 50) {
	//             navBtnBars.classList.remove('white-bars-color');

	//         }
	//     });

	// window.addEventListener('scroll', handleObserver);

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

			<div className={classes['nav-desktop']}>
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
