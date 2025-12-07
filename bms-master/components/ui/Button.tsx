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

    const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:scale-95";

    const variants = {
        primary: "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-md hover:shadow-lg hover:scale-105",
        secondary: "bg-background border border-primary text-primary hover:bg-primary/5 hover:-translate-y-0.5 shadow-sm",
        outline: "border border-border bg-transparent hover:bg-secondary text-muted-foreground hover:text-foreground",
        ghost: "hover:bg-secondary text-muted-foreground hover:text-foreground",
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-12 px-8 text-base",
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
