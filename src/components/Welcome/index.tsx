import { useEffect, useState } from 'react';

export default function Welcome() {
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handlerScroll = () => {
            setScrolled(window.scrollY / 2);
        };

        window.addEventListener('scroll', handlerScroll);
        return () => window.removeEventListener('scroll', handlerScroll);
    }, []);

    return (
        <section
            className='relative -z-1 grid h-screen place-items-center bg-[url(/background.webp)] bg-cover bg-center bg-no-repeat'
            style={{
                transform: `translateY(${scrolled}px)`,
            }}
        >
            <h1 className='animate-welcome font-primary text-5xl font-bold text-black opacity-0 md:text-8xl'>
                Hi! I'm Davi
            </h1>
        </section>
    );
}
