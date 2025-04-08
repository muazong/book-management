import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App';
import HomePage from '../pages/HomePage';
import { PagePath } from '../enums';
import AllBooks from '@/pages/AllBooks';
import Detail from '@/pages/Detail';
import LoginPage from '@/pages/LoginPage';

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
        element: <AllBooks />,
      },
      {
        path: `${PagePath.Detail}/:bookId`,
        element: <Detail />,
      },
      {
        path: PagePath.AboutUs,
        element: <h1 className="text-white">About Page</h1>,
      },
    ],
  },
  {
    path: PagePath.Login,
    element: <LoginPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
