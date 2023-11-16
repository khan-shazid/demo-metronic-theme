import { ReactNode } from 'react';

import styles from './account-type-item.module.css';

export default function AccountTypeItem({
    icon,
    title,
    desc,
    value,
    isActive,
    onClick,
}: {
    title: string;
    desc: string;
    value: string;
    icon: (hexCode: string) => ReactNode;
    isActive: boolean;
    onClick: (type: string) => void;
}) {
    return (
        <button
            type="button"
            className={`${styles.container} ${isActive && styles.active}`}
            onClick={() => onClick(value)}
        >
            {icon(styles.icon)}
            <div>
                <p className={styles['type-name']}>{title}</p>
                <p className={styles['type-details']}>{desc}</p>
            </div>
        </button>
    );
}
