import { useState, useCallback } from 'react';
import Category from './Category';
import classes from './Menu.module.css';


const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Tikka Masala',
		category: 'Chicken Dishes',
		imgSmall: 'src/assets/meals/Chicken-Tikka-Masala-small.png',
		img: 'src/assets/meals/Chicken-Tikka-Masala.png',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis ipsa, nam laboriosam unde facere sed magni eius error veritatis?',
		price: 32,
	},
	{
		id: 'm2',
		name: 'Chicken Korma',
		category: 'Chicken Dishes',
		imgSmall: 'src/assets/meals/chicken-korma-84835-small.jpeg',
		img: 'src/assets/meal/chicken-korma.jpeg',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis ipsa, nam laboriosam unde facere sed magni eius error veritatis?',
		price: 36,
	},
	{
		id: 'm3',
		name: 'Mixed Vegetable',
		category: 'Vegan Dishes',
		imgSmall: 'src/assets/meals/mixed-vegetable-small.png',
		img: 'src/assets/meals/mixed-vegetable.png',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis ipsa, nam laboriosam unde facere sed magni eius error veritatis?',
		price: 28,
	},
	{
		id: 'm4',
		name: 'Palak Paneer',
		category: 'Vegan Dishes',
		imgSmall: 'src/assets/meals/Palak-Paneer-small.png',
		img: 'src/assets/meals/Palak-Paneer.png',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis ipsa, nam laboriosam unde facere sed magni eius error veritatis?',
		price: 30,
	},
	{
		id: 'm5',
		name: 'Chicken Samosa',
		category: 'Starters',
		imgSmall: 'src/assets/meals/Chicken-Samosa-small.png',
		img: 'src/assets/meals/Chicken-Samosa.png',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis ipsa, nam laboriosam unde facere sed magni eius error veritatis?',
		price: 14,
	},
	{
		id: 'm6',
		name: 'Veg Samosa',
		category: 'Starters',
		imgSmall: 'src/assets/meals/veg-samosa-small.png',
		img: 'src/assets/meals/veg-samosa.png',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis ipsa, nam laboriosam unde facere sed magni eius error veritatis?',
		price: 12,
	},
	{
		id: 'm7',
		name: 'Chicken Kathi Rolls',
		category: 'Starters',
		imgSmall: 'src/assets/meals/chicken-kathi-rolls-small.jpg',
		img: 'src/assets/meals/chicken-kathi-rolls.jpg',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis ipsa, nam laboriosam unde facere sed magni eius error veritatis?',
		price: 18,
	},
	{
		id: 'm8',
		name: 'Coca-cola',
		category: 'Drinks',
		imgSmall: 'src/assets/meals/coca-cola-280x280.jpg',
		img: 'src/assets/meals/coca-cola-247x296.jpg',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis ipsa, nam laboriosam unde facere sed magni eius error veritatis?',
		price: 18,
	},
	{
		id: 'm9',
		name: 'Kheer',
		category: 'Desserts',
		imgSmall: 'src/assets/meals/Rice-Kheer-Indian-Rice-Pudding-small.jpg',
		img: 'src/assets/meals/Rice-Kheer-Indian-Rice-Pudding.jpg',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis ipsa, nam laboriosam unde facere sed magni eius error veritatis?',
		price: 18,
	},
	{
		id: 'm10',
		name: 'Gulab Jamun',
		category: 'Desserts',
		imgSmall: 'src/assets/meals/gulab-jamun-280x280.png',
		img: 'src/assets/meals/gulab-jamun.png',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis ipsa, nam laboriosam unde facere sed magni eius error veritatis?',
		price: 18,
	},
];

const STARTERS = 'Starters';
const CHICKEN = 'Chicken Dishes';
const VEG = 'Vegan Dishes';
const DRINKS = 'Drinks';
const DESSERTS = 'Desserts';

export default function Menu() {
	const [activeCategory, setActiveCategory] = useState('');

	const categoredMeals = useCallback(
		DUMMY_MEALS.reduce((acc, obj) => {
			const key = obj['category'];
			const curGroup = acc[key] ?? [];
			return { ...acc, [key]: [...curGroup, obj] };
		}, {}),
		[DUMMY_MEALS]
	);

	const clickHandler = category => {
		setActiveCategory(category);
	};

	return (
		<section className={classes.menu}>
			<h2 className={classes.title}>MENU</h2>
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
		</section>
	);
}
