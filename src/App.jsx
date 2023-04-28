import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const router = createBrowserRouter([]);

  return <RouterProvider router={router} /> 
}

export default App
