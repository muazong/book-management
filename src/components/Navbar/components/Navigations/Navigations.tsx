import { useEffect, useRef, useState } from 'react';
import { Pages } from '../../../../enums';

function Navigations() {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Home);
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
    <div className="relative text-white">
      <ul
        ref={navRef}
        className="font-poppins relative flex items-center justify-between gap-6 font-semibold"
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
  );
}

export default Navigations;
