import { FC } from 'react';

interface ContainerProps {
   className?: string;
}

export const Container: FC<React.PropsWithChildren & ContainerProps> = ({ children, className }) => {
   return <div className={className ? `${className}-container` : 'container'}>{children}</div>;
};
