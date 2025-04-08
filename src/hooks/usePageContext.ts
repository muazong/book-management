import { useContext } from 'react';
import { PageContext } from '../context';

function usePageContext() {
  const pageContext = useContext(PageContext);

  if (pageContext === null) {
    throw new Error('usePageContext must be used with a PageContext');
  }

  return { ...pageContext };
}

export { usePageContext };
