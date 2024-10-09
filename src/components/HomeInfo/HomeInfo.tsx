import { OutLink } from '@components/index';
import styles from './HomeInfo.module.scss';

const title = 'Сборщик проектов Gulp';

const brandTelegramLink = {
   link: 'https://t.me/frontendblokchat',
   title: 'Открыть телеграм-канал «Frontend Blok»',
};

const yandexLink = {
   link: 'https://disk.yandex.ru/d/hDnVBLMEipNzJw',
   title: 'Скачать сборку от «Frontend Blok»',
};

export const HomeInfo = () => {
   return (
      <section className={styles.homeInfo}>
         <h2>{title}</h2>

         <blockquote className={styles.homeInfoQuote}>
            <p className={styles.homeInfoQuoteText}>
               Gulp — это сборщик проектов, инструмент для автоматизации задач, которые описаны выше. Он поможет вам
               ускорить вашу работу и грамотно подготовить проект к релизу.
            </p>
         </blockquote>

         <p>
            Скачать сборку можно из бота в телеграм-группе «
            <OutLink
               className={styles.homeInfoLink}
               href={brandTelegramLink.link}
               target="_blank"
               title={brandTelegramLink.title}
            >
               Frontend Blok
            </OutLink>
            » или по прямой{' '}
            <OutLink className={styles.homeInfoLink} href={yandexLink.link} target="_blank" title={yandexLink.title}>
               ссылке
            </OutLink>
            . В дальнейшем вы сможете настроить её под свои задачи.
         </p>
      </section>
   );
};
