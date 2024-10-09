import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './AppTitle.module.scss';

type TitleAttributes = HTMLAttributes<HTMLTitleElement>;

export const AppTitle: FC<PropsWithChildren & TitleAttributes> = ({ children }) => {
   return <h1 className={styles.appTitle}>{children}</h1>;
};
