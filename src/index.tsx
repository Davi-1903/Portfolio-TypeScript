import { lazy, StrictMode, Suspense, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import WrappeContexts from './context/wrapperContexts';
import Loading from './components/Loading';
import './globals.css';

const App = lazy(() => import('./App'));

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

const rootEl = document.getElementById('root');
if (rootEl) {
    const root = createRoot(rootEl);
    root.render(
        <StrictMode>
            <Root />
        </StrictMode>,
    );
}
