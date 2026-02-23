import type { ReactNode } from 'react';
import { ThemeProvider } from './themeContext';
import { MenuProvider } from './menuContext';

const WrappeContexts = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider>
            <MenuProvider>{children}</MenuProvider>
        </ThemeProvider>
    );
};

export default WrappeContexts;
