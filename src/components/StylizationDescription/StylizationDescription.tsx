import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useMediaQuery } from '@hooks/useMediaQuery';
import styles from './StylizationDescription.module.scss';
import scssFolderScreen from '@assets/images/scss-folder.jpg';

export const StylizationDescription = () => {
   const isMedia = useMediaQuery('(min-width: 1000px)');
   const descriptionScreenHeight = 114;

   return (
      <section className={styles.stylizationDescription}>
         {isMedia && <LazyLoadImage src={scssFolderScreen} height={descriptionScreenHeight} alt="скриншот" />}

         <p className={styles.stylizationDescriptionText}>
            SCSS-файлы стилей складываются в папку <code>scss</code>, что в папке <code>src</code>. Файлы «компонентов»
            стилей складываются в подходящую подпапку. Результирующие файлы создаются только в самой папке{' '}
            <code>scss</code>. В эти файлы импортируются компоненты стилей. В результате будет создан файл с тем же
            именем и постфиксом <code>.min.css</code>.
         </p>
      </section>
   );
};
