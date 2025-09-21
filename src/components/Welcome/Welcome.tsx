import type { JSX } from 'react';
import { useEffect, useState } from 'react';
import './Welcome.css';

export default function Welcome(): JSX.Element {
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
            className='welcome'
            style={{
                transform: `translateY(${scrolled}px)`,
            }}
        >
            <h1>Hi! I'm Davi</h1>
        </section>
    );
}
