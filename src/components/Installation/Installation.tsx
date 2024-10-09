import { OutLink } from '@components/index';
import styles from './Installation.module.scss';

const title = 'Установка' as const;

const brandTelegramLink = {
   link: 'https://t.me/frontendblokchat',
   title: 'Открыть телеграм-канал «Frontend Blok»',
} as const;

const yandexLink = {
   link: 'https://disk.yandex.ru/d/hDnVBLMEipNzJw',
   title: 'Скачать сборку от «Frontend Blok»',
} as const;

const nodeLink = {
   link: 'https://nodejs.org/en/download/package-manager',
   title: 'Скачать NodeJS',
} as const;

const instructions = [
   {
      text: 'Распакуйте архив со сборкой в любую удобную для Ввас папку',
   },
   {
      text: 'Установите (если еще не установлен) gulp глобально: ',
      code: `npm${'\u00A0'}i${'\u00A0'}-g${'\u00A0'}gulp-cli`,
   },
   {
      text: 'Перейдите в распакованную папку со сборкой',
   },
   {
      text: 'Обновите зависимости проекта: ',
      code: `npm${'\u00A0'}i`,
   },
   {
      text: 'Чтобы начать работу введите команду: ',
      code: `npm${'\u00A0'}run${'\u00A0'}dev`,
   },
   {
      text: 'Чтобы собрать проект введите команду: ',
      code: `npm${'\u00A0'}run${'\u00A0'}build`,
   },
];

export const Installation = () => {
   return (
      <section className={styles.installation}>
         <h2>{title}</h2>

         <ul className={styles.installationList}>
            <li className={styles.installationListItem}>
               Установите (если еще не установлен){' '}
               <OutLink className={styles.installationLink} href={nodeLink.link} target="_blank" title={nodeLink.title}>
                  NodeJS
               </OutLink>
            </li>
            <li className={styles.installationListItem}>
               Скачайте сборку по{' '}
               <OutLink
                  className={styles.installationLink}
                  href={yandexLink.link}
                  target="_blank"
                  title={yandexLink.title}
               >
                  ссылке
               </OutLink>{' '}
               или через бота группы{' '}
               <OutLink
                  className={styles.installationLink}
                  href={brandTelegramLink.link}
                  target="_blank"
                  title={brandTelegramLink.title}
               >
                  Frontend Blok
               </OutLink>{' '}
               в телеграм
            </li>
            {instructions.map((item) => (
               <li key={item.text} className={styles.installationListItem}>
                  {item.text}
                  {item.code && <code>{item.code}</code>}
               </li>
            ))}
         </ul>

         <p>
            <b>P.S.</b> Если вы всё сделали правильно, то, в режиме разработки, у вас должен запуститься локальный
            сервер и открыться браузер.
         </p>
      </section>
   );
};
