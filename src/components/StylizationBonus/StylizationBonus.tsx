import { OutLink } from '@components/index';
import classNames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Separator } from '@components/Separator/Separator';
import styles from './StylizationBonus.module.scss';
import mixinsScreen from '@assets/images/mixins.jpg';
import functionsScreen from '@assets/images/functions.jpg';
import extendsScreen from '@assets/images/extends.jpg';
import varsScreen from '@assets/images/vars.jpg';
import varsFolderScreen from '@assets/images/varsFolder.jpg';
import zeroingFolderScreen from '@assets/images/zeroing.jpg';

const title = 'Бонусы' as const;

const brandTelegramLink = {
   link: 'https://t.me/frontendblokchat',
   title: 'Открыть телеграм-канал «Frontend Blok»',
} as const;

const useRule = {
   link: 'https://sass-lang.com/documentation/at-rules/use/',
   title: 'Открыть документацию',
} as const;

const normalizeRule = {
   link: 'https://www.npmjs.com/package/normalize.css',
   title: 'Открыть документацию',
} as const;

const resetRule = {
   link: 'https://www.npmjs.com/package/reset.css',
   title: 'Открыть документацию',
} as const;

export const StylizationBonus = () => {
   return (
      <section className={styles.stylizationBonus}>
         <h2>{title}</h2>

         <div className={styles.stylizationBonusInfo}>
            Сборка включает в себя небольшие бонусы от администрации телеграм-группы «
            <OutLink
               className={styles.stylizationLink}
               href={brandTelegramLink.link}
               target="_blank"
               title={brandTelegramLink.title}
            >
               Frontend Blok
            </OutLink>
            ».
         </div>

         <article className={styles.stylizationBonusBody}>
            <h3>Миксины</h3>

            <div className={classNames(styles.stylizationBonusItem, styles.stylizationBonusItemGift)}>
               <div className={styles.stylizationBonusItemImage}>
                  <LazyLoadImage src={mixinsScreen} alt="скриншот" />
               </div>

               <p>
                  Чтобы подключить уже имеющиеся в сборке миксины нужно использовать правило{' '}
                  <OutLink className={styles.stylizationLink} href={useRule.link} target="_blank" title={useRule.title}>
                     @use
                  </OutLink>{' '}
                  из препроцессора <code>sass/scss</code>. Если вместо конкретного файла с миксинами указать папку будут
                  подключены все миксины из всех файлов. Пример подключения можно увидеть на скриншоте.
               </p>
            </div>
         </article>

         <article className={styles.stylizationBonusBody}>
            <h3>Функции</h3>

            <div className={classNames(styles.stylizationBonusItem, styles.stylizationBonusItemGift)}>
               <div className={styles.stylizationBonusItemImage}>
                  <LazyLoadImage src={functionsScreen} alt="скриншот" />
               </div>

               <p>
                  Чтобы подключить уже имеющиеся в сборке функции нужно использовать правило{' '}
                  <OutLink className={styles.stylizationLink} href={useRule.link} target="_blank" title={useRule.title}>
                     @use
                  </OutLink>{' '}
                  из препроцессора <code>sass/scss</code>. Если вместо конкретного файла с функциями указать папку будут
                  подключены все функции из всех файлов. Пример подключения можно увидеть на скриншоте.
               </p>
            </div>
         </article>

         <article className={styles.stylizationBonusBody}>
            <h3>Шаблоны</h3>

            <div className={classNames(styles.stylizationBonusItem, styles.stylizationBonusItemGift)}>
               <div className={styles.stylizationBonusItemImage}>
                  <LazyLoadImage src={extendsScreen} alt="скриншот" />
               </div>

               <p>
                  Чтобы подключить уже имеющиеся в сборке шаблоны нужно использовать правило{' '}
                  <OutLink className={styles.stylizationLink} href={useRule.link} target="_blank" title={useRule.title}>
                     @use
                  </OutLink>{' '}
                  из препроцессора <code>sass/scss</code>. Если вместо конкретного файла с шаблонами указать папку будут
                  подключены все шаблоны из всех файлов. Пример подключения можно увидеть на скриншоте.
               </p>
            </div>
         </article>

         <article className={styles.stylizationBonusBody}>
            <h3>Переменные</h3>

            <div className={classNames(styles.stylizationBonusItem, styles.stylizationBonusItemVars)}>
               <div className={styles.stylizationBonusItemImage}>
                  <LazyLoadImage src={varsScreen} alt="скриншот" />
               </div>

               <p>
                  Чтобы подключить переменные из уже имеющегося в сборке файла нужно использовать правило{' '}
                  <OutLink className={styles.stylizationLink} href={useRule.link} target="_blank" title={useRule.title}>
                     @use
                  </OutLink>{' '}
                  из препроцессора <code>sass/scss</code>. Если вместо конкретного файла с переменными указать папку
                  будут подключены все переменные из всех файлов. Пример подключения можно увидеть на скриншоте.
               </p>
            </div>

            <div className={classNames(styles.stylizationBonusItem, styles.stylizationBonusItemVars)}>
               <div className={styles.stylizationBonusItemImage}>
                  <LazyLoadImage src={varsFolderScreen} alt="скриншот" />
               </div>

               <p>
                  Уже имеющиеся в сборке переменные разбиты на 4 файла: <code>colors</code>, <code>layout</code>,{' '}
                  <code>literals</code> и <code>primitives</code>. В первом файле находятся цвета, во втором — параметры
                  шаблона страницы (размер полотна макета, размер ограничивющего контейнера и т.д.), третий задуман для
                  хранения списков, а четвертый хранит в себе общие для разных компонентов цифры, строки, символы и т.д.
               </p>
            </div>
         </article>

         <article className={styles.stylizationBonusBody}>
            <h3>Обнуление</h3>

            <div className={classNames(styles.stylizationBonusItem, styles.stylizationBonusItemZeroing)}>
               <div className={styles.stylizationBonusItemImage}>
                  <LazyLoadImage src={zeroingFolderScreen} alt="скриншот" />
               </div>

               <p>
                  В папке <code>zeroing</code> лежат 3 полезных файла для обнуления дефолтных стилей браузеров:{' '}
                  <OutLink
                     className={styles.stylizationLink}
                     href={normalizeRule.link}
                     target="_blank"
                     title={normalizeRule.title}
                  >
                     _normalize.css
                  </OutLink>
                  ,{' '}
                  <OutLink
                     className={styles.stylizationLink}
                     href={resetRule.link}
                     target="_blank"
                     title={resetRule.title}
                  >
                     _reset.css
                  </OutLink>{' '}
                  и <code>_nullstyle.scss</code> — это небольшой кастомный файл обнуления стилей. Кастомный файл
                  подключен в сборке по умолчанию, при необходимости его можно отключить (в файле{' '}
                  <code>_index.scss</code> в папке <code>components</code>) или заменить другим аналогичным.
               </p>
            </div>
         </article>

         <article className={styles.stylizationBonusBody}>
            <h3>Адаптивное меню с плавной прокруткой</h3>

            <div className={styles.stylizationBonusItemBurgerMenu}>
               Начальные стили адаптивного меню с плавной прокруткой лежат в файле <code>_menu.scss</code> в папке{' '}
               <code>plugins</code>. Файл содержит только самые начальные стили, небходимые для работы механизма меню.
               Стили недостающие до соответствия макету дописываются отдельно и по мере необходимости. Пример
               подключения данного файла можно увидеть в файле <code>_header.scss</code> (уже подключен, нужно только
               раскомментировать).
            </div>
         </article>

         <article className={styles.stylizationBonusBody}>
            <h3>Кастомные чекбоксы и радиокнопки</h3>

            <div className={styles.stylizationBonusItemBurgerMenu}>
               Уже заданные в сборке стили кастомного чекбокса и кастомной радиокнопки лежат в файлах{' '}
               <code>_checkbox.scss</code> и <code>_radio.scss</code> соответственно. Файлы находятся в папке{' '}
               <code>components/elements</code>. Чтобы подключить данные стили нужно использовать правило{' '}
               <OutLink className={styles.stylizationLink} href={useRule.link} target="_blank" title={useRule.title}>
                  @use
               </OutLink>{' '}
               из препроцессора <code>sass/scss</code>.
            </div>
         </article>

         <div className={styles.stylizationBonusInfo}>
            <Separator />
            Чтобы сборка увидела новый добавленный файл с миксинами, шаблонами, переменными или функциями нужно
            реэкспортировать его в файле <code>_index.scss</code>, лежащего в соответствующей папке. После удаления
            файла с миксинами/шаблонами/переменными/функциями в файле <code>_index.scss</code> не должно оставаться
            строки с реекспортом удаленного файла. Если css-файл со стилями положить по пути <code>vendor/css</code> он
            будет скопирован в папку со стилями (по-умолчанию css) отдельным файлом (без обработки).
         </div>
      </section>
   );
};
