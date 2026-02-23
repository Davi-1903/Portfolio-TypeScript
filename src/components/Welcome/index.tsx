import { memo, useEffect, useRef, useState } from 'react';
import type { WelcomeProps } from '../../interfaces/Props';
import clsx from 'clsx';

const Welcome = ({ loadingEnd }: WelcomeProps) => {
    const [scrolled, setScrolled] = useState(0);
    const welcomeRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handlerScroll = () => {
            setScrolled(window.scrollY / 2);
        };

        window.addEventListener('scroll', handlerScroll);
        return () => window.removeEventListener('scroll', handlerScroll);
    }, []);

    return (
        <section
            ref={welcomeRef}
            className='relative -z-1 grid h-screen place-items-center bg-[url(/background-light.webp)] bg-cover bg-center bg-no-repeat select-none dark:bg-[url(/background-dark.webp)]'
            style={{
                transform: `translateY(${scrolled}px)`,
            }}
        >
            <h1
                className={clsx(
                    'font-primary text-5xl font-bold text-secund opacity-0 md:text-8xl',
                    loadingEnd && 'animate-welcome',
                )}
            >
                Hi! I'm Davi
            </h1>
        </section>
    );
};

export default memo(Welcome);
