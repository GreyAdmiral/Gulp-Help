import classNames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './StylizationInfo.module.scss';
import scssFolderScreen from '@assets/images/scss-folder.jpg';

const title = 'Содержимое' as const;

export const StylizationInfo = () => {
   return (
      <section className={styles.stylizationInfo}>
         <h2>{title}</h2>

         <article className={classNames(styles.stylizationInfoItem, styles.stylizationInfoStruct)}>
            <div className={styles.stylizationInfoItemImage}>
               <LazyLoadImage src={scssFolderScreen} alt="скриншот" />
            </div>

            <p>
               Внутри папки <code>scss</code> лежат 4 папки: <code>components</code>, <code>modules</code>,{' '}
               <code>plugins</code> и <code>tools</code>. В первую сложены компоненты стилей, во вторую — стили мелких
               элементов (типа кастомного чекбокса и т.д.), в третью — стили от используемых самописных (включая честно
               прихватизированные у «коллег по цеху» или в интернете) плагинов. В четвертой папке лежит небольшая
               подборка стилевых инструментов (миксины, шаблоны функции), а также основные переменные (не путать с
               css-переменными) для верстки (цвета, размеры и т.д.). Внутри первой папки можно найти папки{' '}
               <code>blocks</code>, куда складываются файлы со стилями блоков, <code>elements</code>, где лежат стили
               мелких элементов типа того же кастомного чекбокса, и <code>layout</code>, где лежат стили корневых
               элементов страницы (например <code>html</code>, <code>body</code>, <code>wrapper</code> [засунут туда же
               для удобства]) глобальные css-переменые и (данный файл появится при запуске сборки и при условии наличия
               файлов шрифтов в папке <code>fonts</code>) файл со сгенерированными стилями шрифтов. Туда же (например в
               папку <code>components</code>) всегда можно добавить любые папки и файлы на собственный вкус и для
               собственных нужд. Чтобы подключить файл со стилями нового блока или шрифтов (уже прописано, достаточно
               раскомментировать) нужно реэкспортировать его в файле <code>_index.scss</code> папки{' '}
               <code>components</code>.
            </p>
         </article>
      </section>
   );
};
