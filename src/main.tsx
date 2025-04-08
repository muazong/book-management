import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import AppRouter from './routes';
import { AuthContextProvider } from './context';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  </StrictMode>,
);
