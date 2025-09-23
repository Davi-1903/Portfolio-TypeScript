import type { ReactNode } from 'react';

export interface Project {
    id: number;
    name: string;
    description: string;
    imageURL: string;
    projectURL: string;
}

export interface Link {
    id: number;
    icon: ReactNode;
    url: string;
    target: string;
}
