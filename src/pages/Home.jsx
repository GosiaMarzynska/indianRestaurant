import { useState } from 'react';
import About from '../components/About';
import HeaderMain from '../components/HeaderMain';
import MenuSection from '../components/MenuSection';
import PageContent from '../components/PageGontent';
import Reservation from '../components/ReservationSection';
import Carousel from '../components/UI/Carousel';
import Header from '../components/Header';
import useDesktopViewport from '../hooks/useDesktopViewport';

export default function HomePage() {
	const width = useDesktopViewport();

	return (
		<PageContent>
			{width < 992 ? <HeaderMain /> : <Header />}
			<Carousel />
			<About />
			<MenuSection />
			<Reservation />
		</PageContent>
	);
}
