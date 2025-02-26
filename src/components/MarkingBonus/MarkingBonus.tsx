import classNames from 'classnames';
import { OutLink, Separator } from '@components/index';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './MarkingBonus.module.scss';
import htmlMenuIncludes from '@assets/images/menu-includes.jpg';
import htmlMenuContent from '@assets/images/menu-content.jpg';
import htmlCheckbox from '@assets/images/checkbox-includes.jpg';

const title = 'Бонусы' as const;

const brandTelegramLink = {
   link: 'https://t.me/frontendblokchat',
   title: 'Открыть телеграм-канал «Frontend Blok»',
} as const;

export const MarkingBonus = () => {
   return (
      <section className={styles.markingBonus}>
         <h2>{title}</h2>

         <div className={styles.markingBonusInfo}>
            Сборка включает в себя небольшие бонусы от администрации телеграм-группы «
            <OutLink
               className={styles.markingLink}
               href={brandTelegramLink.link}
               target="_blank"
               title={brandTelegramLink.title}
            >
               Frontend Blok
            </OutLink>
            ».
         </div>

         <article className={styles.markingBonusBody}>
            <h3>Адаптивное меню с плавной прокруткой</h3>

            <div className={classNames(styles.markingBonusItem, styles.markingBonusItemMenu)}>
               <div className={styles.markingBonusItemImage}>
                  <LazyLoadImage src={htmlMenuIncludes} alt="скриншот" />
               </div>

               <p>
                  Чтобы подключить уже заданную в сборке разметку адаптивного меню с плавной прокруткой нужно вставить
                  код (путь берется относительно файла в котором вставляется меню){' '}
                  <code>{'@@include("../navigation/menu.html")'}</code>. Пример подключения подобной разметки можно
                  увидеть на скриншоте рядом.
               </p>
            </div>

            <div className={classNames(styles.markingBonusItem, styles.markingBonusItemMenu)}>
               <div className={styles.markingBonusItemImage}>
                  <LazyLoadImage src={htmlMenuContent} alt="скриншот" />
               </div>

               <p>
                  Текст и ссылку для каждого пункта меню, а так же количество самих пунктов можно указать в файле{' '}
                  <code>menuitems.json</code>, который находится по пути{' '}
                  <code>html/plugins/navigations/data/menu.html</code>. Все необходимые параметры задаются в виде
                  свойств сериализованного объекта. Массив таких объектов и составляет содержимое меню. Пример
                  содержимого такого файла можно увидеть на скриншоте рядом.
               </p>
            </div>
         </article>

         <article className={styles.markingBonusBody}>
            <h3>Кастомные чекбоксы и радиокнопки</h3>

            <div className={classNames(styles.markingBonusItem, styles.markingBonusItemCheckbox)}>
               <div className={styles.markingBonusItemImage}>
                  <LazyLoadImage src={htmlCheckbox} alt="скриншот" />
               </div>

               <p>
                  Чтобы подключить уже заданную в сборке разметку кастомного чекбокса нужно вставить код (путь берется
                  относительно файла в котором вставляется меню){' '}
                  <code>{`@@include("./html/components/elements/checkbox.html", {id: 'my-checkbox', name: 'test', value: ''})`}</code>
                  . Чтобы передать html-атрибуты чекбокса необходимо присвоить их свойству arguments объекта с
                  настройками. Например{' '}
                  <code>{`@@include("./html/components/elements/checkbox.html", {id: 'my-checkbox', name: 'test', value: '', arguments: 'disabled'})`}</code>
                  . Аналогичным образом, из файла <code>radio.html</code> в той же папке, подключаются кастомные
                  радиокнопки. Примеры подключения подобной разметки можно увидеть на скриншоте рядом.
               </p>
            </div>
         </article>

         <div className={styles.markingBonusInfo}>
            <Separator />
            Все настройки и структура уже имеющейся в сборке разметки легко дорабатываются и переделываются под
            конкретные нужды и потребности.
         </div>
      </section>
   );
};
