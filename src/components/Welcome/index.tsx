import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

export default function Welcome() {
    const [isEmerge, setEmerge] = useState(false);
    const [scrolled, setScrolled] = useState(0);
    const welcomeRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handlerScroll = () => {
            setScrolled(window.scrollY / 2);
        };

        const observer = new IntersectionObserver(
            entries =>
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setEmerge(true);
                        observer.unobserve(entry.target);
                    }
                }),
            { threshold: 0.5 },
        );

        if (welcomeRef.current) observer.observe(welcomeRef.current);
        window.addEventListener('scroll', handlerScroll);
        return () => {
            window.removeEventListener('scroll', handlerScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <section
            ref={welcomeRef}
            className='relative -z-1 grid h-screen place-items-center bg-[url(/background-light.webp)] bg-cover bg-center bg-no-repeat dark:bg-[url(/background-dark.webp)]'
            style={{
                transform: `translateY(${scrolled}px)`,
            }}
        >
            <h1
                className={clsx(
                    'font-primary text-5xl font-bold text-black-100 opacity-0 md:text-8xl',
                    isEmerge && 'animate-welcome',
                )}
            >
                Hi! I'm Davi
            </h1>
        </section>
    );
}
