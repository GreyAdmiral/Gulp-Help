import { useEffect } from 'react';
import { AppTitle, StylizationBonus, StylizationDescription, StylizationInfo } from '@components/index';

const documentTitle = 'Стили';

export const Stylization = () => {
   useEffect(() => {
      document.title = `Шпаргалка по Gulp | ${documentTitle}`;
   }, []);

   return (
      <>
         <AppTitle>Использование стилей</AppTitle>
         <StylizationDescription />
         <StylizationInfo />
         <StylizationBonus />
      </>
   );
};
