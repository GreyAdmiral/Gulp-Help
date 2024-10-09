import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './UserScriptsInfo.module.scss';
import scriptsFolder from '@assets/images/scripts-folder.jpg';
import scriptsImport from '@assets/images/scripts-import.jpg';
import classNames from 'classnames';

const title = 'Содержимое' as const;

export const UserScriptsInfo = () => {
   return (
      <section className={styles.userScriptsInfo}>
         <h2>{title}</h2>

         <article className={classNames(styles.userScriptsInfoItem, styles.userScriptsInfoStruct)}>
            <div className={styles.userScriptsInfoItemImage}>
               <LazyLoadImage src={scriptsFolder} alt="скриншот" />
            </div>

            <p>
               Внутри папки <code>js</code> лежит 5 папок: <code>model</code>, <code>modules</code>,{' '}
               <code>plugins</code>, <code>state</code> и <code>view</code>. В первую папку (по, своего рода, аналогии с
               паттерном MVC) сложены скрипты с некоторой логикой, а так же вспомогательные функции (дебонс, троттлинг,
               карри и т.д.), во вторую — небольшие самодостаточные скрипты (например скрипт динамики плейсхолдера), в
               третью — скрипты используемых самописных (включая честно прихватизированные у «коллег по цеху» или в
               интернете) плагинов. Четвертая папка выделена под хранение переменных, в ней лежат 2 файла —{' '}
               <code>vars</code>, в которой удобно хранить заранее объявленные переменные, и <code>state</code>, куда
               удобно (уже в процессе написания кода) складывать переменные к которым требуется доступ из разных
               скрриптов. Пятая папка отдана под функции-компоненты (
               <i>компонент — функция возвращающая html-разметку</i>) и вспомогательные функции для оных.
            </p>
         </article>

         <article className={classNames(styles.userScriptsInfoItem, styles.userScriptsInfoStruct)}>
            <div className={styles.userScriptsInfoItemImage}>
               <LazyLoadImage src={scriptsImport} alt="скриншот" />
            </div>

            <p>
               Файл <code>index.js</code> внутри папки экспортирует объект со всеми содержащимися в ней скриптами.
               Указывать при импорте сам файл <code>index.js</code> не обязательно. Для удобства использования можно
               получить все экспортируемое содержимое папки в 1 объект и получать соответствующее его свойство. Образец
               такого подключения можно увидеть на скриншоте рядом.
            </p>
         </article>
      </section>
   );
};
