import { Outlet} from 'react-router-dom';
import Navigation from '../UI/Navigation';

export default function RootLayout() {
	// const navigation = useNavigation();

	return (
		<>
			<Navigation />
			<main>
				{/* {navigation.state=== 'loading'  && <p>Loading...</p> } */}
				<Outlet />
			</main>
		</>
	);
}
