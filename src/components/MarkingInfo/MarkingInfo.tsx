import classNames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './MarkingInfo.module.scss';
import htmlHeadScreen from '@assets/images/html-head.jpg';
import htmlFolderScreen from '@assets/images/html-folder.jpg';

const title = 'Содержимое' as const;

export const MarkingInfo = () => {
   return (
      <section className={styles.markingInfo}>
         <h2>{title}</h2>

         <article className={classNames(styles.markingInfoItem, styles.markingInfoTemplate)}>
            <div className={styles.markingInfoItemImage}>
               <LazyLoadImage src={htmlHeadScreen} alt="скриншот" />
            </div>

            <p>
               В сборке уже встроен небольшой шаблон тега <code>head</code>, в котором уже добавлены основные
               необходимые мета-теги, возможность подключения отдельных файлов для светлой (по-умолчанию файл{' '}
               <code>lightscheme.min.css</code>) и темной (по-умолчанию файл <code>darkscheme.min.css</code>) тем сайта,
               а так же скрипт для компенсации «блика» переключения тем при загрузке страницы. Шаблон уже подключен
               по-умолчанию, чтобы включить режим разных файлов для стилей нужно изменить значение свойства{' '}
               <code>multistyles</code> на <code>true</code>.
            </p>
         </article>

         <article className={classNames(styles.markingInfoItem, styles.markingInfoStruct)}>
            <div className={styles.markingInfoItemImage}>
               <LazyLoadImage src={htmlFolderScreen} alt="скриншот" />
            </div>

            <p>
               Структура папок в папке <code>html</code> максимально проста и понятна. Внутри лежат 3 папки:{' '}
               <code>components</code> и <code>plugins</code>. В первую сложены «компоненты» разметки, во вторую —
               разметка от используемых самописных (включая честно прихватизированные у «коллег по цеху») плагинов.
               Внутри первой папки можно найти папки <code>blocks</code>, куда складываются файлы с блоками для
               страницы, <code>elements</code>, где лежат мелкие элементы типа бургера или кастомного чекбокса, и{' '}
               <code>layout</code>, где лежат шаблоны для подключения информационного блока страницы (тег{' '}
               <code>head</code>), блока с подключением фавиконок и шаблон подключения скриптов. Внутри второй папки
               лежит папка <code>navigations</code>, в которой лежат «компоненты» разметки необходимые для плагина
               адаптивного бургерного меню.
            </p>
         </article>
      </section>
   );
};
