import { ReactNode, ElementType } from 'react';

interface HeadingProps {
    children: ReactNode;
    className?: string;
    as?: ElementType;
}

export function H1({ children, className = '', as: Component = 'h1' }: HeadingProps) {
    return (
        <Component className={`text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl ${className}`}>
            {children}
        </Component>
    );
}

export function H2({ children, className = '', as: Component = 'h2' }: HeadingProps) {
    return (
        <Component className={`text-3xl font-bold tracking-tight text-white sm:text-4xl ${className}`}>
            {children}
        </Component>
    );
}

export function H3({ children, className = '', as: Component = 'h3' }: HeadingProps) {
    return (
        <Component className={`text-2xl font-bold tracking-tight text-white sm:text-3xl ${className}`}>
            {children}
        </Component>
    );
}

export function Paragraph({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <p className={`text-lg text-gray-300 leading-relaxed ${className}`}>
            {children}
        </p>
    );
}
