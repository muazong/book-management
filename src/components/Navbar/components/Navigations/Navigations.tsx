import { useState } from 'react';
import { Pages } from '../../../../enums';

import MobileNav from './responsive/MobileNav';
import LargeScreenNav from './responsive/LargeScreenNav';

function Navigations() {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Home);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div>
      <LargeScreenNav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <MobileNav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Navigations;
