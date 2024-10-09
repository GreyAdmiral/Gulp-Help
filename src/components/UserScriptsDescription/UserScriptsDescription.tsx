import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useMediaQuery } from '@hooks/useMediaQuery';
import styles from './UserScriptsDescription.module.scss';
import scriptsFolder from '@assets/images/scripts-folder.jpg';

export const UserScriptsDescription = () => {
   const isMedia = useMediaQuery('(min-width: 1000px)');
   const descriptionScreenHeight = 114;

   return (
      <section className={styles.userScriptsDescription}>
         {isMedia && <LazyLoadImage src={scriptsFolder} height={descriptionScreenHeight} alt="скриншот" />}

         <p className={styles.userScriptsDescriptionText}>
            JS-файлы скриптов складываются в папку <code>js</code>, что в папке <code>src</code>. Файлы «составляющих»
            скриптов складываются в подходящую подпапку. Результирующие файлы создаются только в самой папке{' '}
            <code>js</code>. В эти файлы импортируются компоненты составляющих скриптов. В результате будет создан файл
            с тем же именем и постфиксом <code>.min.js</code>.
         </p>
      </section>
   );
};
