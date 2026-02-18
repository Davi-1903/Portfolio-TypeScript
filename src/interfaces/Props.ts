import type { ReactNode } from 'react';

export interface SectionEmergeProps {
    children: ReactNode;
    threshold: number;
}

export interface SkillProps {
    technology: string;
}

export interface ContributorProps {
    name: string;
    url: string;
}
