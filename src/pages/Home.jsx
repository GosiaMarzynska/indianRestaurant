import About from '../components/About';
import HeaderMain from '../components/HeaderMain';
import MenuSection from '../components/MenuSection';
import PageContent from '../components/PageGontent';
import Reservation from '../components/ReservationSection';

export default function HomePage() {
	return (
		<PageContent>
			<HeaderMain />
			<About />
			<MenuSection />
            <Reservation/>
		</PageContent>
	);
}
