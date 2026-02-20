import type { Dispatch, ReactNode, SetStateAction } from 'react';

export type Theme = 'light' | 'dark';

export interface Project {
    id: number;
    name: string;
    description: string;
    imageURL: string;
    projectURL: string;
    technologies: string[];
    team?: { id: number; name: string; url: string }[];
}

export interface Link {
    id: number;
    name: string;
    icon: ReactNode;
    url: string;
    target: string;
}

export interface themeContextType {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
}
