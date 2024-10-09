import { Link, Outlet } from 'react-router-dom';
import { Container, OutLink, Navigation } from '@components/index';
import { AppRoutes } from '@router/routes';
import sprite from '@assets/sprite.svg';
import headerStyles from './Header.module.scss';
import mainStyles from './Main.module.scss';
import footerStyles from './Footer.module.scss';

const brandLink = {
   link: 'https://frontendblok.com',
   title: 'Открыть сайт «Frontend Blok»',
} as const;

const logoWidth = 100;
const logoHeight = 60;

export const Layout = () => {
   return (
      <>
         <header className={headerStyles.header}>
            <Container className={headerStyles.header}>
               <div className={headerStyles.headerBody}>
                  <Link
                     to={AppRoutes.HOME_ROUTE}
                     title="Перейти на главную страницу"
                     className={headerStyles.headerLogo}
                  >
                     <svg width={logoWidth} height={logoHeight}>
                        <use xlinkHref={`${sprite}#gulp`} />
                     </svg>
                  </Link>
                  <Navigation />
               </div>
            </Container>
         </header>

         <div className={mainStyles.main}>
            <Container className={mainStyles.main}>
               <div className={mainStyles.mainBody}>
                  <Outlet />
               </div>
            </Container>
         </div>

         <footer className={footerStyles.footer}>
            <Container className={footerStyles.footer}>
               <div className={footerStyles.footerBody}>
                  © Проект «
                  <OutLink href={brandLink.link} target="_blank" title={brandLink.title}>
                     Frontend Blok
                  </OutLink>
                  », {new Date().getFullYear()}
               </div>
            </Container>
         </footer>
      </>
   );
};
