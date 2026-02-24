import { memo, useEffect, useRef, useState } from 'react';
import Technology from '../Technology';
import clsx from 'clsx';
import Me from '/Me.webp';

const About = () => {
    const [isEmerge, setEmerge] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const skills = [
        'Python',
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'MySQL',
        'SQLite',
        'Markdown',
        'Flask',
        'React',
        'Tailwind',
        'Git',
        'Github',
        'Figma',
        'VsCode',
        'Vite',
        'Docker',
    ];

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
            className='flex min-h-screen flex-wrap items-center justify-center gap-12 bg-first px-12 py-24 shadow-[0_0_3rem_3rem_var(--color-first)] md:px-24'
        >
            <div
                className={clsx(
                    'w-sm border-2 border-secund bg-first p-4 opacity-0 not-dark:shadow-basic',
                    isEmerge && 'animate-translate-left',
                )}
            >
                <img src={Me} alt='Me' />
            </div>
            <div className={clsx('w-sm text-secund opacity-0', isEmerge && 'animate-translate-right')}>
                <h2 className='font-primary text-5xl font-bold'>Who am i?</h2>
                <hr className='my-2 border border-secund' />
                <p className='font-secundary text-lg/normal'>
                    I am a <strong>Web developer</strong>. My full name is{' '}
                    <strong>Davi Francisco da Silva Fonseca</strong> and I am 17 years old. I currently live in
                    Jucurutu, RN - Brazil. I'm in my 4th year of internet computing at <strong>IFRN</strong> - Campus
                    Caicó
                </p>
                <h3 className='mt-4 font-primary text-3xl font-bold'>My skills</h3>
                <hr className='my-2 border border-secund' />
                <ul className='flex flex-wrap gap-2'>
                    {skills.map((skill, idx) => (
                        <li key={idx}>
                            <Technology technology={skill} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default memo(About);
