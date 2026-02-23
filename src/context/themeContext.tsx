import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { loadTheme } from '../utils/theme';
import type { Theme, themeContextType } from '../interfaces/Objects';

const themeContext = createContext<themeContextType>({
    theme: 'light',
    setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(loadTheme);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    return <themeContext.Provider value={{ theme, setTheme }}>{children}</themeContext.Provider>;
};

export const useTheme = () => {
    return useContext(themeContext);
};
