import type { ReactNode } from 'react';
import type { Theme } from './Objects';

export interface SectionEmergeProps {
    children: ReactNode;
    threshold: number;
}

export interface SkillProps {
    technology: string;
    theme?: Theme;
}

export interface ContributorProps {
    name: string;
    url: string;
}
