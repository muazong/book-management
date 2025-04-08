import { Link, useLocation } from 'react-router-dom';
import { PagePath, Pages } from '@/enums';
import usePageContext from '@/hooks';
import { useEffect } from 'react';

const navItems = [
  { label: 'Home', page: Pages.Home, path: PagePath.Home },
  { label: 'All Books', page: Pages.AllBooks, path: PagePath.AllBooks },
  { label: 'About Us', page: Pages.AboutUs, path: PagePath.AboutUs },
];

function LargeScreenNav() {
  const { currentPage, setCurrentPage } = usePageContext();
  const location = useLocation();

  useEffect(() => {
    const pathToPage: Record<string, Pages> = {
      [PagePath.Home]: Pages.Home,
      [PagePath.AllBooks]: Pages.AllBooks,
      [PagePath.AboutUs]: Pages.AboutUs,
    };

    const matchedPage = pathToPage[location.pathname];
    if (matchedPage) setCurrentPage(matchedPage);
  }, [location.pathname, setCurrentPage]);

  return (
    <div className="relative hidden sm:block">
      <ul className="font-poppins relative flex items-center justify-between gap-6 font-semibold text-white">
        {navItems.map(({ label, page, path }) => (
          <li
            key={label}
            className={`group relative cursor-pointer px-2 py-1 transition-colors duration-300`}
            onClick={() => setCurrentPage(page)}
          >
            <Link to={path}>
              <p
                className={`after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out group-hover:after:left-0 group-hover:after:w-full ${
                  currentPage === page ? 'after:w-full' : ''
                }`}
              >
                {label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LargeScreenNav;
