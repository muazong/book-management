import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pages, PagePath } from '@/enums';
import usePageContext from '@/hooks';

const breakpoint = 640; // breakpoint for small screen

function LargeScreenNav() {
  const { currentPage, setCurrentPage } = usePageContext();
  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.innerWidth >= breakpoint,
  );

  const navRef = useRef<HTMLUListElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };
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
        <li
          className="relative cursor-pointer px-2 py-1"
          onClick={() => setCurrentPage(Pages.Home)}
        >
          <Link to={PagePath.Home}>
            <p>Home</p>
          </Link>
        </li>
        <li
          className="relative cursor-pointer px-2 py-1"
          onClick={() => setCurrentPage(Pages.AllBooks)}
        >
          <Link to={PagePath.AllBooks}>
            <p>All Books</p>
          </Link>
        </li>
        <li
          className="relative cursor-pointer px-2 py-1"
          onClick={() => setCurrentPage(Pages.AboutUs)}
        >
          <Link to={PagePath.AboutUs}>
            <p>About Us</p>
          </Link>
        </li>
      </ul>

      {/* Underline */}
      <div
        ref={underlineRef}
        className="absolute bottom-0 h-[2px] bg-white transition-all duration-300 ease-in-out"
      ></div>
    </div>
  );
}

export default LargeScreenNav;
