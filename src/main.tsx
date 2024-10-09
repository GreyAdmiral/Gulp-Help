import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { AppRouter } from '@router/router';
import './scss/style.scss';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <HashRouter>
         <AppRouter />
      </HashRouter>
   </StrictMode>
);
