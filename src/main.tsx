import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import WrappeContexts from './context/wrapperContexts.tsx';
import Loading from './components/Loading/index.tsx';
import App from './App.tsx';
import './globals.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Suspense fallback={<Loading />}>
            <WrappeContexts>
                <App />
            </WrappeContexts>
        </Suspense>
    </StrictMode>,
);
