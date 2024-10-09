import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '@components/Layout/Layout';
import { Home, Marking, SourceFiles, Stylization, UserScripts } from '@pages/index';
import { AppRoutes } from './routes';

export const AppRouter: FC = () => {
   const START_ROUTE = AppRoutes.DESCRIPTION_ROUTE;
   return (
      <Routes>
         <Route path={AppRoutes.HOME_ROUTE} element={<Layout />}>
            <Route index element={<Navigate to={START_ROUTE} />} />
            <Route path={AppRoutes.DESCRIPTION_ROUTE} element={<Home />} />
            <Route path={AppRoutes.MARKING_ROUTE} element={<Marking />} />
            <Route path={AppRoutes.SOURCEFILES_ROUTE} element={<SourceFiles />} />
            <Route path={AppRoutes.STYLIZATION_ROUTE} element={<Stylization />} />
            <Route path={AppRoutes.USERSCRIPTS_ROUTE} element={<UserScripts />} />
            <Route path="*" element={<Home />} />
         </Route>
      </Routes>
   );
};
