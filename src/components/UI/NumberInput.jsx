import React from 'react';
import classes from './NumberInput.module.css';

export default function NumberInput(props) {
	
const {counter, setCounter} = props;


	const increment = () =>
		setCounter(prev => {
			if (prev < 20) {
				prev++;
			}
            return prev;
		});
	const decrement = () =>
		setCounter(prev => {
			if (prev > 1) {
				prev--;
			}
            return prev;
		});
	return (
		<div className={classes.container}>
			<button onClick={decrement} className={classes.prev}>
				- 
			</button>

			<span className={classes.counter}> {counter} </span>

			<button onClick={increment} className={classes.next}>
				+ 
			</button>
		</div>
	);
}
