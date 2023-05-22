import React, { useState } from 'react';
import classes from './NumberInput.module.css';

export default function NumberInput() {
	const [counter, setCounter] = useState(0);

	const increment = () =>
		setCounter(prev => {
			if (prev < 20) {
				prev++;
			}
            return prev;
		});
	const decrement = () =>
		setCounter(prev => {
			if (prev > 0) {
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
