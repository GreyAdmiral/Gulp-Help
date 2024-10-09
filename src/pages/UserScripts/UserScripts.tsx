import { useEffect } from 'react';
import { AppTitle, UserScriptsBonus, UserScriptsDescription, UserScriptsInfo } from '@components/index';

const documentTitle = 'Скрипты' as const;

export const UserScripts = () => {
   useEffect(() => {
      document.title = `Шпаргалка по Gulp | ${documentTitle}`;
   }, []);

   return (
      <>
         <AppTitle>Использование скриптов</AppTitle>
         <UserScriptsDescription />
         <UserScriptsInfo />
         <UserScriptsBonus />
      </>
   );
};
