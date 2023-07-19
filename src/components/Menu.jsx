import React, { useState, useCallback } from 'react';
import { HashLink } from 'react-router-hash-link';
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

	const getCategoryButtonStyles = category => {
		if (activeCategory === category) {
			return `${classes['category-button']} ${classes['active-btn']}`;
		} else return classes['category-button'];
	};

	return (
		<Section title='menu' sectionId='menu'>
			<div className={classes.meals}>
			<div className={classes['category-link']} id='starters' name='starters'/>
				<HashLink
					to='#starters'
					onClick={() => clickHandler(STARTERS)}
					className={getCategoryButtonStyles(STARTERS)}
					>
					Przystawki
				</HashLink>				
				{activeCategory === STARTERS && (
					<Category mealsData={categoredMeals['Starters']} className={classes[`menu-items`]} />
				)}
				<div className={classes['category-link']} id='chicken' name='chicken'/>
				<HashLink
					to='#chicken'
					onClick={() => clickHandler(CHICKEN)}
					className={getCategoryButtonStyles(CHICKEN)}
					>
					Dania z kurczaka
				</HashLink>
				{activeCategory === CHICKEN && (
					<Category mealsData={categoredMeals['Chicken Dishes']} className={classes[`menu-items`]} />
				)}
				<div className={classes['category-link']} id='veg' name='veg'/>
				<HashLink to='#veg' onClick={() => clickHandler(VEG)} className={getCategoryButtonStyles(VEG)}>
					Dania Vegańskie
				</HashLink>
				{activeCategory === VEG && (
					<Category mealsData={categoredMeals['Vegan Dishes']} className={classes[`menu-items`]} />
				)}
				<div className={classes['category-link']} id='breads' name='breads'/>
				<HashLink
					to='#breads'
					onClick={() => clickHandler(BREADS)}
					className={getCategoryButtonStyles(BREADS)}
					>
					Indian Breads
				</HashLink>
				{activeCategory === BREADS && (
					<Category mealsData={categoredMeals['Indian Breads']} className={classes[`menu-items`]} />
				)}
				<div className={classes['category-link']} id='desserts' name='desserts'/>
				<HashLink
					to='#desserts'
					onClick={() => clickHandler(DESSERTS)}
					className={getCategoryButtonStyles(DESSERTS)}
					>
					Desery
				</HashLink>
				{activeCategory === DESSERTS && (
					<Category mealsData={categoredMeals['Desserts']} className={classes[`menu-items`]} />
				)}
				<div className={classes['category-link']} id='drinks' name='drinks'/>
				<HashLink
					to='#drinks'
					onClick={() => clickHandler(DRINKS)}
					className={getCategoryButtonStyles(DRINKS)}
					>
					Napoje
				</HashLink>
				{activeCategory === DRINKS && (
					<Category mealsData={categoredMeals['Drinks']} className={classes[`menu-items`]} />
				)}
			</div>
		</Section>
	);
}
