import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import MenuPage from './pages/MenuPage';
import ReservationPage from './pages/ReservationPage';
import OrderPage from './pages/OrderPage';
import ContactPage from './pages/ContactPage';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			errorElement: <ErrorPage />,
			children: [
				{ index: true, element: <HomePage /> },
				{
					path: 'menu',
					element: <MenuPage />,
				},
				{
					path: 'rezerwacje',
					element: <ReservationPage />,
				},
				{
					path: 'zamowienie',
					element: <OrderPage />,
				},
				{
					path: 'kontakt',
					element: <ContactPage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
