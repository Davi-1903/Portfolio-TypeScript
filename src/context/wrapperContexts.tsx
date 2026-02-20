import type { ReactNode } from 'react';
import { ThemeProvider } from './themeContext';
import { MenuProvider } from './menuContext';

export default function WrappeContexts({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <MenuProvider>{children}</MenuProvider>
        </ThemeProvider>
    );
}
