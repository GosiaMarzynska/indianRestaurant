import { useCallback, useEffect, useRef, useState } from 'react';
import useDesktopViewport from '../../hooks/useDesktopViewport';
import classes from './Carousel.module.css';

const sliderStyles = {
	position: 'relative',
	height: '100%',
};

const slideStyles = {
	height: '100%',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
};

const slidesContainerStyles = {
	display: 'flex',
	height: '67vh',
	transition: 'transform ease-out 0.3s',
};

export default function Carousel() {
	const width = useDesktopViewport();
	const timerRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const sliderWidth = width;

	const slides = ['src/assets/meals/meal1.jpg', 'src/assets/meals/meal2.jpg', 'src/assets/meals/meal3.jpg'];

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const goToNext = useCallback(() => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	}, [currentIndex, slides]);

	const goToSlide = slideIndex => {
		setCurrentIndex(slideIndex);
	};
	const getSlideStylesWithBackground = slideIndex => ({
		...slideStyles,
		backgroundImage: `url(${slides[slideIndex]})`,
		width: `${sliderWidth}px`,
	});

	const getSliderStyles = () => {
		return {
			...sliderStyles,
			width: sliderWidth,
		};
	};

	const getSlidesContainerStylesWithWidth = () => {
		return {
			...slidesContainerStyles,
			width: sliderWidth * slides.length,
			transform: `translateX(${-(currentIndex * sliderWidth)}px)`,
		};
	};

	useEffect(() => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		timerRef.current = setTimeout(() => {
			goToNext();
		}, 2000);

		return () => clearTimeout(timerRef.current);
	}, [goToNext]);

	return (
		<div className={classes.carousel} style={getSliderStyles()}>
			<div>
				<div onClick={goToPrevious} className={`${classes.arrow} ${classes['arrow-left']}`}>
					<i className='fa-sharp fa-solid fa-circle-chevron-left'></i>
				</div>
				<div onClick={goToNext} className={`${classes.arrow} ${classes['arrow-right']}`}>
					<i className='fa-sharp fa-solid fa-circle-chevron-right'></i>
				</div>
			</div>
			<div className={classes['slides-container']}>
				<div style={getSlidesContainerStylesWithWidth()}>
					{slides.map((_, slideIndex) => (
						<div key={slideIndex} style={getSlideStylesWithBackground(slideIndex)}></div>
					))}
				</div>
			</div>
			<div className={classes['dots-container']}>
				{slides.map((slide, slideIndex) => (
					<span className={classes.dot} key={slideIndex} onClick={() => goToSlide(slideIndex)}>
						●
					</span>
				))}
			</div>
		</div>
	);
}
