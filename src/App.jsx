import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';


function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			errorElement: <ErrorPage />,
			children: [{ index: true, element: <HomePage /> },
			{
				path: 'menu',
				element: <Menu/>,
				children: [
				],
		},
	]}]);

	return <RouterProvider router={router} />;
}

export default App;
