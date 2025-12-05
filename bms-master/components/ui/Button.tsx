import React from 'react';
import { cn } from '@/lib/utils'; // We'll need a utility for class merging, or just do it inline for simplicity in this MVP

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
}

export default function Button({
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    href,
    ...props
}: ButtonProps) {

    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50 active:scale-95";

    const variants = {
        primary: "bg-brand-accent text-white hover:bg-brand-secondary shadow-md hover:shadow-lg hover:-translate-y-0.5",
        secondary: "bg-white border border-brand-accent text-brand-accent hover:bg-brand-accent/5 hover:-translate-y-0.5 shadow-sm",
        outline: "border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-600 hover:text-slate-900",
        ghost: "hover:bg-slate-100 text-slate-600 hover:text-slate-900",
    };

    const sizes = {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-8 text-base",
        lg: "h-14 px-10 text-lg",
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={combinedClasses}>
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
}
