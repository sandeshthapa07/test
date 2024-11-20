import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// this is a helper function for tailwind classes for conditional and dynamic classes
// can take string or array of strings or objects just seperate by comma

// cn(" relative z-50 ", className)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// clsx is function for the conditional classes and dynamic classes can take
// twMerge is a function for merging the tailwind classes if conflict it will take the last one
// suppose p-4 p-2 then it will take last p-2
