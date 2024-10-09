import { AnchorHTMLAttributes, FC } from 'react';
import styles from './OutLink.module.scss';

interface IOutLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
   className?: string;
}

export const OutLink: FC<React.PropsWithChildren & IOutLinkProps> = ({ className, children, ...props }) => {
   return (
      <a className={className ? `${styles.link} ${className}` : styles.link} {...props}>
         {children}
      </a>
   );
};
