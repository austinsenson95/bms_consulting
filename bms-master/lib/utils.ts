import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Note: user needs to install clsx and tailwind-merge if they want this robust, 
// but for now I'll provide a simple version or just assume they will install it.
// Actually, to keep it simple and dependency-free for the user (as requested "minimal adjustments"),
// I will just use template literals in components mostly, but this file is good practice.
// I'll add clsx and tailwind-merge to package.json instructions or just implement a simple joiner.

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
