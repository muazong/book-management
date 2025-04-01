import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App';
import HomePage from '../pages/HomePage';
import { PagePath } from '../enums';

const router = createBrowserRouter([
  {
    path: PagePath.Home,
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PagePath.AllBooks,
        element: <h1 className="text-white">All Books</h1>,
      },
      {
        path: PagePath.AboutUs,
        element: <h1 className="text-white">About Page</h1>,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
