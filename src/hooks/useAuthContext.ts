import { useContext } from 'react';
import { AuthContext } from '@/context';

function useAuthContext() {
  const pageContext = useContext(AuthContext);

  if (pageContext === null) {
    throw new Error('useAuthContext must be used with a AuthContext');
  }

  return { ...pageContext };
}

export { useAuthContext };
