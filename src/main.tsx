import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import Loading from './components/Loading/index.tsx';
import { ThemeProvider } from './context/themeContext.tsx';
import App from './App.tsx';
import './globals.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Suspense fallback={<Loading />}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Suspense>
    </StrictMode>,
);
