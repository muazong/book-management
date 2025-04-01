import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App';
import HomePage from '../pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'allbooks',
        element: <h1 className="text-white">All Books</h1>,
      },
      {
        path: 'about',
        element: <h1 className="text-white">About Page</h1>,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
