import { ReactNode } from 'react';
import ButtonStyles from './button.module.css';

export default function Button({ children, className, ...rest }: { children: ReactNode | string; className?: string }) {
    return (
        <button className={`${ButtonStyles.base} ${className}`} {...rest}>
            {children}
        </button>
    );
}
