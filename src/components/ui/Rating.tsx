import { ReactNode } from 'react';

export function Rating({ children = "★★★★★", className = '' }: { children?: ReactNode; className?: string }) {
    return (
        <span className={`text-center text-4xl text-yellow-300 ${className}`}>
            {children}
        </span>
    );
}
