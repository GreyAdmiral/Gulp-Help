import { Separator } from '@components/index';
import type { FC, PropsWithChildren } from 'react';
import styles from './SourceFilesSection.module.scss';

interface SourceFilesSectionProps extends PropsWithChildren {
   title?: string;
   separator?: boolean;
}

export const SourceFilesSection: FC<SourceFilesSectionProps> = ({ title, separator, children }) => {
   return (
      <section className={styles.sourceFilesSection}>
         {title && <h2>{title}</h2>}

         {separator && <Separator />}

         <p>{children}</p>
      </section>
   );
};
