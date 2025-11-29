import { useEffect, useState } from 'react';

export default function Welcome() {
    const [scrolled, setScrolled] = useState<number>(0);

    useEffect(() => {
        function handlerScroll(): void {
            setScrolled(window.scrollY / 2);
        }

        window.addEventListener('scroll', handlerScroll);
        return () => window.removeEventListener('scroll', handlerScroll);
    }, []);

    return (
        <section
            className='-z-1 relative h-screen bg-welcome grid place-items-center'
            style={{
                transform: `translateY(${scrolled}px)`,
            }}
        >
            <h1 className='font-bold text-5xl font-primary text-black opacity-0 animate-welcome md:text-8xl'>
                Hi! I'm Davi
            </h1>
        </section>
    );
}
