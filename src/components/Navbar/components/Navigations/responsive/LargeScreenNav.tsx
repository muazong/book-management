import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Pages, PagePath } from '@/enums';
import usePageContext from '@/hooks';

const breakpoint = 640;

function LargeScreenNav() {
  const { currentPage, setCurrentPage } = usePageContext();
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= breakpoint);
  const navRef = useRef<HTMLUListElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    switch (location.pathname) {
      case PagePath.Home:
        setCurrentPage(Pages.Home);
        break;
      case PagePath.AllBooks:
        setCurrentPage(Pages.AllBooks);
        break;
      case PagePath.AboutUs:
        setCurrentPage(Pages.AboutUs);
        break;
      default:
        break;
    }
  }, [location.pathname, setCurrentPage]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= breakpoint);
    window.addEventListener('resize', handleResize);

    if (isDesktop && navRef.current && underlineRef.current) {
      const activeItem = Array.from(navRef.current.children).find(
        (li) => li.textContent === currentPage,
      ) as HTMLLIElement | undefined;

      if (activeItem) {
        underlineRef.current.style.width = `${activeItem.offsetWidth}px`;
        underlineRef.current.style.left = `${activeItem.offsetLeft}px`;
      }
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage, isDesktop]);

  return (
    <div className="relative hidden sm:block">
      <ul
        ref={navRef}
        className="font-poppins relative flex items-center justify-between gap-6 font-semibold text-white"
      >
        <li className="relative cursor-pointer px-2 py-1">
          <Link to={PagePath.Home}>
            <p>Home</p>
          </Link>
        </li>
        <li className="relative cursor-pointer px-2 py-1">
          <Link to={PagePath.AllBooks}>
            <p>All Books</p>
          </Link>
        </li>
        <li className="relative cursor-pointer px-2 py-1">
          <Link to={PagePath.AboutUs}>
            <p>About Us</p>
          </Link>
        </li>
      </ul>

      <div
        ref={underlineRef}
        className="absolute bottom-0 h-[2px] bg-white transition-all duration-300 ease-in-out"
      ></div>
    </div>
  );
}

export default LargeScreenNav;
