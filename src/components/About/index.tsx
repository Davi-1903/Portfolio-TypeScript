import { useEffect, useRef, useState } from 'react';
import Me from '/Me.jpg';
import clsx from 'clsx';

export default function About() {
    const [isEmerge, setEmerge] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setEmerge(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 },
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className='flex min-h-screen flex-wrap items-center justify-center gap-12 bg-white p-12 shadow-about md:p-24'
        >
            <div
                className={clsx(
                    'w-sm border-2 border-black bg-white p-4 opacity-0 shadow-basic',
                    isEmerge ? 'animate-translate-left' : '',
                )}
            >
                <img src={Me} alt='Me' />
            </div>
            <div className={clsx('w-sm text-black opacity-0', isEmerge ? 'animate-translate-right' : '')}>
                <h2 className='font-primary text-5xl font-bold'>Who am i?</h2>
                <hr className='my-2 border border-black' />
                <p className='font-secundary text-lg/normal'>
                    My full name is <strong>Davi Francisco da Silva Fonseca</strong> and I'm 17 years old. I live in
                    Jucurutu, RN - Brazil, and I'm studing Computer Science for the Internet at <strong>IFRN</strong> -
                    Campus Caicó.
                </p>
            </div>
        </section>
    );
}
