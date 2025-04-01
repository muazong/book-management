import { useEffect, useRef, useState } from 'react';
import { Pages } from '../../../../enums';

function Navigations() {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Home);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLUListElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current && underlineRef.current) {
      const activeItem = Array.from(navRef.current.children).find(
        (li) => li.textContent === currentPage,
      ) as HTMLLIElement | undefined;

      if (activeItem) {
        underlineRef.current.style.width = `${activeItem.offsetWidth}px`;
        underlineRef.current.style.left = `${activeItem.offsetLeft}px`;
      }
    }
  }, [currentPage]);

  return (
    <div>
      <div className="relative hidden sm:block">
        <ul
          ref={navRef}
          className="font-poppins relative flex items-center justify-between gap-6 font-semibold text-white"
        >
          {Object.values(Pages).map((value) => (
            <li
              key={value}
              onClick={() => setCurrentPage(value)}
              className="relative cursor-pointer px-2 py-1"
            >
              <p>{value}</p>
            </li>
          ))}
        </ul>

        {/* Underline */}
        <div
          ref={underlineRef}
          className="absolute bottom-0 h-[2px] bg-white transition-all duration-300 ease-in-out"
        ></div>
      </div>

      {/* Mobile  */}
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
              {Object.values(Pages).map((value) => (
                <li key={value} className="relative cursor-pointer px-2 py-1">
                  <p>{value}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigations;
