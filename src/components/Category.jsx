import React, { useState } from 'react';
import MealItem from './MealItem';
import classes from './Category.module.css'

export default function Category({ mealsData }) {
	const [activeMeal, setActiveMeal] = useState(null);

	const meals = mealsData.map(meal => {
		return (
			<MealItem
				key={meal.id}
				id={meal.id}
				name={meal.name}
				imgSmall={meal.imgSmall}
				price={meal.price}
				clickHandler={() => setActiveMeal(meal.id)}
				description={meal.description}
				isActive={activeMeal === meal.id ? true : false}
			/>
		);
	});
	return <div className={classes.category}>{meals}</div>;
}
