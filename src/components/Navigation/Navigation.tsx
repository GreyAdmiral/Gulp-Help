import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useClickOutside } from '@hooks/useClickOutside';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { ROUTES_TRANSLATOR } from '@router/routes';
import styles from './Navigation.module.scss';

interface NavigationProps {
   id?: string;
}

const setActiveClass = ({ isActive }: { isActive: boolean }) => (isActive ? styles.active : undefined);

export const Navigation: FC<NavigationProps> = ({ id, ...props }) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const routes = useMemo(() => Object.entries(ROUTES_TRANSLATOR), []);
   const menuRef = useRef(null);
   const isMedia = useMediaQuery('(min-width: 769px)');

   const onClickOutside = () => {
      if (isMenuOpen) {
         setIsMenuOpen(false);
         document.body.classList.toggle('lock', !isMenuOpen);
      }
   };

   const burgerClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsMenuOpen(!isMenuOpen);
      document.body.classList.toggle('lock', !isMenuOpen);
   };

   const burgerKeyDown = (e: React.KeyboardEvent) => {
      e.stopPropagation();
      const keyCodes = ['Enter', 'Space'];

      if (keyCodes.includes(e.code)) {
         (e.currentTarget as HTMLTemplateElement).click();
      }
   };

   const linkClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (isMenuOpen) {
         setIsMenuOpen(false);
         document.body.classList.remove('lock');
      }
   };

   useClickOutside(menuRef, onClickOutside);

   useEffect(() => {
      if (isMedia && isMenuOpen) {
         setIsMenuOpen(false);
         document.body.classList.remove('lock');
      }
   }, [isMedia, isMenuOpen]);

   return (
      <>
         <div
            className={isMenuOpen ? `${styles.burger} ${styles.active}` : styles.burger}
            role="button"
            aria-expanded={isMenuOpen}
            aria-controls={id || 'menu'}
            aria-label={`${isMenuOpen ? 'Close' : 'Open'} menu`}
            tabIndex={0}
            onClick={burgerClick}
            onKeyDown={burgerKeyDown}
         >
            <span />
         </div>
         <nav
            className={isMenuOpen ? `${styles.menu} ${styles.active}` : styles.menu}
            id={id || 'menu'}
            ref={menuRef}
            {...props}
         >
            <ul className={styles.menuList}>
               {routes.map(([route, title]) => (
                  <li key={route} className={styles.menuItem}>
                     <NavLink to={route} className={setActiveClass} onClick={linkClick}>
                        {title}
                     </NavLink>
                  </li>
               ))}
            </ul>
         </nav>
      </>
   );
};
