import type { Theme } from '../interfaces/Objects';

export function loadTheme(): Theme {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || theme === 'light') return theme;
    return window.matchMedia('(prefers-color-schema: dark').matches ? 'dark' : 'light';
}
