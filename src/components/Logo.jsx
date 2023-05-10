import classes from './Logo.module.css';


export default function Logo() {
	return (
		<header className={classes.background}>
			<img className={classes.logo} src='src\assets\logo-namaste.png' alt='logo restauracji' />
          <a><img className={classes["arrow-down"]}src='src\assets\icons\arrow-down.svg' alt='nawigacja w dół' /></a>
		</header>
	);
}
