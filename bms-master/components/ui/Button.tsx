import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
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

    const baseStyles = cn(
        "inline-flex items-center justify-center font-semibold transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-50",
        "active:scale-[0.98]",
        "rounded-lg"
    );

    const variants = {
        primary: cn(
            "bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground",
            "hover:shadow-glow hover:scale-[1.02]",
            "border border-primary/20"
        ),
        secondary: cn(
            "bg-secondary border border-border text-foreground",
            "hover:border-primary/50 hover:bg-secondary/80",
            "hover:shadow-glow-sm"
        ),
        outline: cn(
            "border border-border bg-transparent text-muted-foreground",
            "hover:border-primary/50 hover:text-foreground hover:bg-primary/5"
        ),
        ghost: cn(
            "text-muted-foreground",
            "hover:text-foreground hover:bg-secondary"
        ),
        glow: cn(
            "bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[length:200%_100%]",
            "text-primary-foreground font-bold",
            "shadow-glow hover:shadow-glow-lg",
            "animate-gradient-x",
            "border border-primary/30"
        ),
    };

    const sizes = {
        sm: "h-9 px-4 text-sm gap-2",
        md: "h-11 px-6 text-sm gap-2",
        lg: "h-14 px-8 text-base gap-3",
    };

    const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

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
