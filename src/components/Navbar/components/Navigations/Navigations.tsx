import { useState } from 'react';
import { Pages } from '../../../../enums';

import './Navigations.css';

function Navigations() {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Home);

  return (
    <div className="text-white">
      <ul className="font-poppins flex items-center justify-between gap-6 font-semibold">
        {Object.values(Pages).map((value) => {
          return (
            <li
              onClick={() => setCurrentPage(value)}
              className={`cursor-pointer hover:underline ${value === currentPage ? 'underline' : ''}`}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navigations;
