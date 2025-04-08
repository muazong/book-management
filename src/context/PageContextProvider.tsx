import { createContext, ReactNode, useEffect, useState } from 'react';
import { Pages } from '@/enums';
import LoadingPage from '@/pages/LoadingPage';

interface PageContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: Pages;
  setCurrentPage: (page: Pages) => void;
}

interface PageContextProviderProps {
  children: ReactNode;
}

const PageContext = createContext<PageContextProps | null>(null);

function PageContextProvider({ children }: PageContextProviderProps) {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Home);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <PageContext.Provider
      value={{
        loading,
        setLoading,
        currentPage,
        setCurrentPage,
      }}
    >
      {loading ? <LoadingPage /> : children}
    </PageContext.Provider>
  );
}

export { PageContext, PageContextProvider };
