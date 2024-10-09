import classNames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { OutLink, Separator } from '@components/index';
import styles from './UserScriptsBonus.module.scss';
import varsScreen from '@assets/images/vars-includes.jpg';
import pluginsScreen from '@assets/images/plugins-includes.jpg';
import modulesScreen from '@assets/images/modules-includes.jpg';
import logicsScreen from '@assets/images/logics-includes.jpg';
import componentsScreen from '@assets/images/components-includes.jpg';

const title = 'Бонусы' as const;

const brandTelegramLink = {
   link: 'https://t.me/frontendblokchat',
   title: 'Открыть телеграм-канал «Frontend Blok»',
} as const;

const debounceLink = {
   link: 'https://doka-guide.vercel.app/js/debounce/',
   title: 'Читать про функцию «debounce»',
} as const;

const throttleLink = {
   link: 'https://doka-guide.vercel.app/js/throttle/',
   title: 'Читать про функцию «throttle»',
} as const;

const curryLink = {
   link: 'https://learn.javascript.ru/currying-partials',
   title: 'Читать про функцию «curry»',
} as const;

export const UserScriptsBonus = () => {
   return (
      <section className={styles.userScriptsBonus}>
         <h2>{title}</h2>

         <div className={styles.userScriptsBonusInfo}>
            Сборка включает в себя небольшие бонусы от администрации телеграм-группы «
            <OutLink
               className={styles.userScriptsLink}
               href={brandTelegramLink.link}
               target="_blank"
               title={brandTelegramLink.title}
            >
               Frontend Blok
            </OutLink>
            ».
         </div>

         <article className={styles.userScriptsBonusBody}>
            <h3>Переменные</h3>

            <div className={classNames(styles.userScriptsBonusItem, styles.userScriptsBonusItemGift)}>
               <div className={styles.userScriptsBonusItemImage}>
                  <LazyLoadImage src={varsScreen} alt="скриншот" />
               </div>

               <p>
                  Файл <code>vars.js</code> по пути <code>state/scripts</code> уже содержит некоторые переменные
                  заданные для удобства использования сборки. В частности ссылки на корневой элемент и тело страницы, их
                  коллекции классов, а так же ширину и высоту документа. Образец подключения объекта со всеми
                  переменными можно увидеть на скриншоте рядом.
               </p>
            </div>
         </article>

         <article className={styles.userScriptsBonusBody}>
            <h3>Плагины</h3>

            <div className={classNames(styles.userScriptsBonusItem, styles.userScriptsBonusItemGift)}>
               <div className={styles.userScriptsBonusItemImage}>
                  <LazyLoadImage src={pluginsScreen} alt="скриншот" />
               </div>

               <p>
                  Файлы лежащие по пути <code>plugins/scripts</code> содержат скрипт адаптивного меню с плавной
                  прокруткой, а так же скрипт определения типа устройства с присвоением корневому элементу страницы
                  соответствующего класса. Чтобы сборка увидела скрипт меню нужно раскомментировать его реэкспорт в
                  файле <code>index.js</code>.
               </p>
            </div>
         </article>

         <article className={styles.userScriptsBonusBody}>
            <h3>Модули</h3>

            <div className={classNames(styles.userScriptsBonusItem, styles.userScriptsBonusItemGift)}>
               <div className={styles.userScriptsBonusItemImage}>
                  <LazyLoadImage src={modulesScreen} alt="скриншот" />
               </div>

               <p>
                  Файлы лежащие по пути <code>modules/scripts</code> содержат скрипты добавки активного класса
                  навигации, определения активности темной темы, динамики плейсхолдера, а так же определения браузера,
                  вьюпорта и заготовку для «ленивой» загрузки графики. Чтобы сборка увидела данные скрипты нужно
                  раскомментировать их реэкспорт в файле <code>index.js</code>.
               </p>
            </div>
         </article>

         <article className={styles.userScriptsBonusBody}>
            <h3>Скрипты логики</h3>

            <div className={classNames(styles.userScriptsBonusItem, styles.userScriptsBonusItemGift)}>
               <div className={styles.userScriptsBonusItemImage}>
                  <LazyLoadImage src={logicsScreen} alt="скриншот" />
               </div>

               <p>
                  Файлы лежащие по пути <code>model/scripts</code> содержат скрипты с функциями «
                  <OutLink
                     className={styles.userScriptsLink}
                     href={debounceLink.link}
                     target="_blank"
                     title={debounceLink.title}
                  >
                     debounce
                  </OutLink>
                  », «
                  <OutLink
                     className={styles.userScriptsLink}
                     href={throttleLink.link}
                     target="_blank"
                     title={throttleLink.title}
                  >
                     throttle
                  </OutLink>
                  » и{' '}
                  <OutLink
                     className={styles.userScriptsLink}
                     href={curryLink.link}
                     target="_blank"
                     title={curryLink.title}
                  >
                     «curry»
                  </OutLink>
                  , форматирования разрядности числа, плавной прокрутки, «паузы» и установки атрибута для компенсации
                  высоты вьюпорта на смартфонах. Чтобы сборка увидела данные скрипты нужно раскомментировать их
                  реэкспорт в файле <code>index.js</code>.
               </p>
            </div>
         </article>

         <article className={styles.userScriptsBonusBody}>
            <h3>Компоненты</h3>

            <div className={classNames(styles.userScriptsBonusItem, styles.userScriptsBonusItemGift)}>
               <div className={styles.userScriptsBonusItemImage}>
                  <LazyLoadImage src={componentsScreen} alt="скриншот" />
               </div>

               <p>
                  Файлы по путям <code>view/components</code> и <code>view/functions</code> создаются и заполняются
                  полльзователем данной сборки в процессе написания кода проекта. Изначально папки пусты и созданы для
                  удобства начинающих пользователей сборки. Файлы из папки <code>functions</code> реэкспортируются
                  только при необходимости.
               </p>
            </div>
         </article>

         <div className={styles.stylizationBonusInfo}>
            <Separator />
            Чтобы сборка увидела новый добавленный файл со скриптом его нужно реэкспортировать в файле{' '}
            <code>index.js</code>, лежащем в соответствующей папке. После удаления файла со скриптом в файле{' '}
            <code>index.js</code> не должно оставаться строки с реекспортом удаленного файла. Если js-файл со скриптом
            положить по пути <code>vendor/js</code> он будет скопирован в папку со скриптами (по-умолчанию js) отдельным
            файлом (без обработки).
         </div>
      </section>
   );
};
