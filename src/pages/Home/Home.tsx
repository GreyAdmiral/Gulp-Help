import { useEffect } from 'react';
import {
   AppTitle,
   Commands,
   HomeDescription,
   HomeInfo,
   Installation,
   OutLink,
   Possibilities,
   Separator,
} from '@components/index';
import styles from './Home.module.scss';

const documentTitle = 'Описание' as const;

const brandTelegramLink = {
   link: 'https://t.me/frontendblokchat',
   title: 'Открыть телеграм-канал «Frontend Blok»',
} as const;

export const Home = () => {
   useEffect(() => {
      document.title = `Шпаргалка по Gulp | ${documentTitle}`;
   }, []);

   return (
      <>
         <AppTitle>Сборщик проектов Gulp 4</AppTitle>
         <HomeDescription />
         <HomeInfo />
         <Possibilities />
         <Commands />
         <Installation />
         <div className={styles.homePostfix}>
            <Separator />

            <p>
               Данная сборка периодически дорабатывается и улучшается, поэтому не забывайте следить за анонсами группы «
               <OutLink
                  className={styles.homeLink}
                  href={brandTelegramLink.link}
                  target="_blank"
                  title={brandTelegramLink.title}
               >
                  Frontend Blok
               </OutLink>
               » в телеграм, там Вы сможете узнать самую актуальную информацию по данной сборке. Если у Вас есть
               какие-то предложения и пожелания по работе или функционалу сборки Вы можете сообщить их администрации
               группы и они (предложения конечно же, а не админы) обязательно будут рассмотрены.
            </p>
         </div>
      </>
   );
};
