import { OutLink } from '@components/index';
import sprite from '@assets/sprite.svg';
import styles from './HomeDescription.module.scss';

const brandTelegramLink = {
   link: 'https://t.me/frontendblokchat',
   title: 'Открыть телеграм-канал «Frontend Blok»',
} as const;

const scssLink = {
   link: 'https://sass-lang.com/documentation/',
   title: 'Открыть документацию',
} as const;

const lessLink = {
   link: 'https://lesscss.org',
   title: 'Открыть документацию',
} as const;

const pugLink = {
   link: 'https://pugjs.org',
   title: 'Открыть документацию',
} as const;

const jsLink = {
   link: 'https://learn.javascript.ru',
   title: 'Открыть документацию',
} as const;

const cssLink = {
   link: 'https://doka.guide/css/',
   title: 'Открыть документацию',
} as const;

const logoWidth = 280;
const logoHeight = 170;

export const HomeDescription = () => {
   return (
      <div className={styles.homeDescription}>
         <p className={styles.homeDescriptionText}>
            Современная Frontend разработка предполагает использование препроцессора стилей{' '}
            <OutLink className={styles.homeDescriptionLink} href={scssLink.link} target="_blank" title={scssLink.title}>
               SCSS
            </OutLink>{' '}
            или{' '}
            <OutLink className={styles.homeDescriptionLink} href={lessLink.link} target="_blank" title={lessLink.title}>
               LESS
            </OutLink>
            , шаблонизатора разметки{' '}
            <OutLink className={styles.homeDescriptionLink} href={pugLink.link} target="_blank" title={pugLink.title}>
               Pug
            </OutLink>
            , сжатие изображений,{' '}
            <OutLink className={styles.homeDescriptionLink} href={jsLink.link} target="_blank" title={jsLink.title}>
               JS
            </OutLink>{' '}
            и{' '}
            <OutLink className={styles.homeDescriptionLink} href={cssLink.link} target="_blank" title={cssLink.title}>
               CSS
            </OutLink>{' '}
            файлов, в целях оптимизации загрузки веб-страниц и многоe многое другое. Чтобы упросить этот процесс, мы
            предлагаем вам, при разработке своих проектов, воспользоваться сборкой Gulp{'\u00A0'}4, которую постоянно
            совершенствует администрация группы «
            <OutLink
               className={styles.homeDescriptionLink}
               href={brandTelegramLink.link}
               target="_blank"
               title={brandTelegramLink.title}
            >
               Frontend Blok
            </OutLink>
            » в телеграм. Ниже будут представлены ссылки на скачивание, а пока пройдемся по основным моментам: описанию
            и установке.
         </p>

         <div className={styles.homeDescriptionLogo}>
            <svg width={logoWidth} height={logoHeight}>
               <use xlinkHref={`${sprite}#gulp`} />
            </svg>
         </div>
      </div>
   );
};
