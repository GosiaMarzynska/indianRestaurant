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

	const getCategoryButtonStyles = (category) => {
		if(activeCategory === category){
			return `${classes['category-button']} ${classes['active-btn']}`;
		}else return classes['category-button'];
	}



	return (
		<Section title='menu'>
			<div className={classes.meals}>
				<button onClick={() => clickHandler(STARTERS)} className={getCategoryButtonStyles(STARTERS)}>
					Przystawki
				</button>
				{activeCategory === STARTERS && (
					<Category mealsData={categoredMeals['Starters']} className={classes[`menu-items`]} />
				)}
				<button onClick={() => clickHandler(CHICKEN)} className={getCategoryButtonStyles(CHICKEN)}>
					Dania z kurczaka
				</button>
				{activeCategory === CHICKEN && (
					<Category mealsData={categoredMeals['Chicken Dishes']} className={classes[`menu-items`]} />
				)}
				<button onClick={() => clickHandler(VEG)} className={getCategoryButtonStyles(VEG)}>
					Dania Vegańskie
				</button>
				{activeCategory === VEG && (
					<Category mealsData={categoredMeals['Vegan Dishes']} className={classes[`menu-items`]} />
				)}
				<button onClick={() => clickHandler(BREADS)} className={getCategoryButtonStyles(BREADS)}>
					Indian Breads
				</button>
				{activeCategory === BREADS && (
					<Category mealsData={categoredMeals['Indian Breads']} className={classes[`menu-items`]} />
				)}
				<button onClick={() => clickHandler(DESSERTS)} className={getCategoryButtonStyles(DESSERTS)}>
					Desery
				</button>
				{activeCategory === DESSERTS && (
					<Category mealsData={categoredMeals['Desserts']} className={classes[`menu-items`]} />
				)}
				<button onClick={() => clickHandler(DRINKS)} className={getCategoryButtonStyles(DRINKS)}>
					Napoje
				</button>
				{activeCategory === DRINKS && (
					<Category mealsData={categoredMeals['Drinks']} className={classes[`menu-items`]} />
				)}
			</div>
		</Section>
	);
}
