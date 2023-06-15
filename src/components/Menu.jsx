import { useState, useCallback } from 'react';
import Category from './Category';
import classes from './Menu.module.css';
import Section from '../components/UI/Section';
import { MEALS } from '../assets/meals';

const STARTERS = 'Starters';
const CHICKEN = 'Chicken Dishes';
const VEG = 'Vegan Dishes';
const DRINKS = 'Drinks';
const DESSERTS = 'Desserts';
const BREADS = 'Indian Breads';

export default function Menu() {
	const [activeCategory, setActiveCategory] = useState('');

	const categoredMeals = useCallback(
		MEALS.reduce((acc, obj) => {
			const key = obj['category'];
			const curGroup = acc[key] ?? [];
			return { ...acc, [key]: [...curGroup, obj] };
		}, {}),
		[MEALS]
	);

	const clickHandler = category => {
		setActiveCategory(category);
	};

	return (
		<Section title='menu'>
			<div className={classes.meals}>
				<button onClick={() => clickHandler(STARTERS)} className={classes['category-button']}>
					Przystawki
				</button>
				{activeCategory === STARTERS && (
					<Category mealsData={categoredMeals['Starters']} className={classes[`menu-items`]} />
				)}
				<button onClick={() => clickHandler(CHICKEN)} className={classes['category-button']}>
					Dania z kurczaka
				</button>
				{activeCategory === CHICKEN && (
					<Category mealsData={categoredMeals['Chicken Dishes']} className={classes[`menu-items`]} />
				)}
				<button onClick={() => clickHandler(VEG)} className={classes['category-button']}>
					Dania Vegańskie
				</button>
				{activeCategory === VEG && (
					<Category mealsData={categoredMeals['Vegan Dishes']} className={classes[`menu-items`]} />
				)}
				<button onClick={() => clickHandler(BREADS)} className={classes['category-button']}>
					Indian Breads
				</button>
				{activeCategory === BREADS && (
					<Category mealsData={categoredMeals['Indian Breads']} className={classes[`menu-items`]} />
				)}
				<button onClick={() => clickHandler(DESSERTS)} className={classes['category-button']}>
					Desery
				</button>
				{activeCategory === DESSERTS && (
					<Category mealsData={categoredMeals['Desserts']} className={classes[`menu-items`]} />
				)}
				<button onClick={() => clickHandler(DRINKS)} className={classes['category-button']}>
					Napoje
				</button>
				{activeCategory === DRINKS && (
					<Category mealsData={categoredMeals['Drinks']} className={classes[`menu-items`]} />
				)}
			</div>
		</Section>
	);
}
