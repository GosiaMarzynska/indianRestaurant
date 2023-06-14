import classes from './Button.module.css';

export default function Button({ text, disabled}) {
	return <button disabled={disabled ? true : false} className={classes.button}>{text}</button>;
}
