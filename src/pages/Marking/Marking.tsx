import { useEffect } from 'react';
import { AppTitle, MarkingBonus, MarkingDescription, MarkingInfo } from '@components/index';

const documentTitle = 'Разметка' as const;

export const Marking = () => {
   useEffect(() => {
      document.title = `Шпаргалка по Gulp | ${documentTitle}`;
   }, []);

   return (
      <>
         <AppTitle>Использование разметки</AppTitle>
         <MarkingDescription />
         <MarkingInfo />
         <MarkingBonus />
      </>
   );
};
