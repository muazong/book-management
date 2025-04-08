import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PagePath, Pages } from '@/enums';
import { usePageContext } from '@/hooks';

function MobileNav() {
  const { setCurrentPage } = usePageContext();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const setCurrentPageHandler = (page: Pages) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <div className="block sm:hidden">
      <button
        className="cursor-pointer text-2xl text-white"
        onClick={() => setIsMenuOpen(true)}
      >
        &#9776;
      </button>

      {isMenuOpen && (
        <div className="bg-black-500 absolute top-0 right-0 left-0 h-screen w-full">
          <button
            className="absolute right-0 cursor-pointer p-3 text-3xl text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          <ul className="font-poppins flex h-full flex-col items-center justify-center gap-3 text-2xl text-white">
            <li className="relative cursor-pointer px-2 py-1">Login</li>
            <li
              className="relative cursor-pointer px-2 py-1"
              onClick={() => setCurrentPageHandler(Pages.Home)}
            >
              <Link to={PagePath.Home}>
                <p>Home</p>
              </Link>
            </li>
            <li
              className="relative cursor-pointer px-2 py-1"
              onClick={() => setCurrentPageHandler(Pages.AllBooks)}
            >
              <Link to={PagePath.AllBooks}>
                <p>All Books</p>
              </Link>
            </li>
            <li
              className="relative cursor-pointer px-2 py-1"
              onClick={() => setCurrentPageHandler(Pages.AboutUs)}
            >
              <Link to={PagePath.AboutUs}>
                <p>About Us</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
