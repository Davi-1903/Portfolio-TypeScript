import { lazy, StrictMode, Suspense, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import WrappeContexts from './context/wrapperContexts.tsx';
import Loading from './components/Loading/index.tsx';
import './globals.css';

const App = lazy(() => import('./App.tsx'));

const Root = () => {
    const [loadingEnd, setLoadingEnd] = useState(false);
    const [isReady, setReady] = useState(false);

    useEffect(() => {
        document.body.style.overflowY = !loadingEnd ? 'hidden' : 'auto';
    }, [loadingEnd]);

    return (
        <>
            {!loadingEnd && <Loading isReady={isReady} setLoadingEnd={setLoadingEnd} />}
            <Suspense fallback={null}>
                <OnMountSignal onMount={() => setReady(true)} />
                <WrappeContexts>
                    <App loadingEnd={loadingEnd} />
                </WrappeContexts>
            </Suspense>
        </>
    );
};

const OnMountSignal = ({ onMount }: { onMount: () => void }) => {
    useEffect(() => onMount(), []);
    return null;
};

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Root />
    </StrictMode>,
);
