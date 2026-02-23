import type { Dispatch, SetStateAction } from 'react';
import type { Theme } from './Objects';

export interface AppProps {
    loadingEnd: boolean;
}

export interface HeaderProps {
    loadingEnd: boolean;
}

export interface WelcomeProps {
    loadingEnd: boolean;
}

export interface SkillProps {
    technology: string;
    theme?: Theme;
}

export interface ContributorProps {
    name: string;
    url: string;
}

export interface LoadingProps {
    isReady: boolean;
    setLoadingEnd: Dispatch<SetStateAction<boolean>>;
}
