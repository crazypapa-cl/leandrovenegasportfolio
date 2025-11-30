import { ReactNode } from 'react';
import { CheckIcon } from '../icons/CheckIcon';

interface ListItemProps {
    children: ReactNode;
    check?: boolean;
    className?: string;
}

export function ListItem({ children, check = false, className = '' }: ListItemProps) {
    return (
        <li className={`flex gap-3 ${className}`}>
            {check && <CheckIcon />}
            <span className="text-gray-300">{children}</span>
        </li>
    );
}

export function List({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <ul role="list" className={`mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10 ${className}`}>
            {children}
        </ul>
    );
}
