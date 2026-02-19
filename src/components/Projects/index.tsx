import { useEffect, useRef, useState } from 'react';
import { projectList } from './projectsList';
import CardProject from '../CardProject';
import clsx from 'clsx';

export default function Projects() {
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
            { threshold: 0.2 },
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className='flex min-h-screen flex-col gap-24 bg-white p-8 pt-0 md:p-24'>
            <div>
                <h2
                    className={clsx(
                        'text-center font-primary text-4xl/normal font-bold text-black opacity-0 md:text-6xl/normal',
                        isEmerge && 'animate-translate-up',
                    )}
                >
                    Projects
                </h2>
            </div>
            <ul className='flex-1 columns-sm gap-8 sm:columns-2 md:gap-12 lg:columns-sm'>
                {projectList.map(project => (
                    <li key={project.id} className='not-last:mb-12'>
                        <CardProject {...project} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
