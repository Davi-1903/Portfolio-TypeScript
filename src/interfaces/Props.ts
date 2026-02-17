import type { ReactNode } from 'react';
import type { Project } from './Objects';

export interface SectionEmergeProps {
    children: ReactNode;
    threshold: number;
}

export interface CardProjectProps {
    project: Project;
}

export interface SkillProps {
    technology: string;
}
