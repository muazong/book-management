import { createContext, ReactNode, useState } from 'react';
import { Pages } from '../enums';

interface PageContextProps {
  currentPage: Pages;
  setCurrentPage: (page: Pages) => void;
}

interface PageContextProviderProps {
  children: ReactNode;
}

const PageContext = createContext<PageContextProps | null>(null);

function PageContextProvider({ children }: PageContextProviderProps) {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Home);

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
}

export { PageContext, PageContextProvider };
