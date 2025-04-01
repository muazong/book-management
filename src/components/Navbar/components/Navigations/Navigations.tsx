import { useState } from 'react';
import { Pages } from '../../../../enums';

import MobileNav from './responsive/MobileNav';
import LargeScreenNav from './responsive/LargeScreenNav';

function Navigations() {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Home);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const setCurrentPageHandler = (page: Pages) => {
    setCurrentPage(page);

    // This logic should only be executed on mobile screen size
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div>
      <LargeScreenNav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <MobileNav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setCurrentPageHandler={setCurrentPageHandler}
      />
    </div>
  );
}

export default Navigations;
