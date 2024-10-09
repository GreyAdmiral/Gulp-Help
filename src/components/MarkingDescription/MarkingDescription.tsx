import { LazyLoadImage } from 'react-lazy-load-image-component';
import { OutLink } from '@components/index';
import { useMediaQuery } from '@hooks/useMediaQuery';
import styles from './MarkingDescription.module.scss';
import htmlFolderScreen from '@assets/images/html-folder.jpg';

const fileIncludePlugin = {
   link: 'https://www.npmjs.com/package/gulp-file-include',
   title: 'Открыть документацию плагина',
} as const;

export const MarkingDescription = () => {
   const isMedia = useMediaQuery('(min-width: 1000px)');
   const descriptionScreenHeight = 70;

   return (
      <section className={styles.markingDescription}>
         {isMedia && <LazyLoadImage src={htmlFolderScreen} height={descriptionScreenHeight} alt="скриншот" />}

         <p className={styles.markingDescriptionText}>
            HTML-файлы страниц складываются в папку <code>src</code>. Файлы компонентов разметки складываются в папку{' '}
            <code>html</code>. Для подключения компонентов разметки в сборке используется плагин{' '}
            <OutLink
               className={styles.markingDescriptionLink}
               href={fileIncludePlugin.link}
               target="_blank"
               title={fileIncludePlugin.title}
            >
               gulp-file-include
            </OutLink>
            .
         </p>
      </section>
   );
};
