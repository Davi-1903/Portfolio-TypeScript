import { memo, useEffect, useRef, useState } from 'react';
import { projectList } from './projectsList';
import CardProject from './components/CardProject';
import clsx from 'clsx';

const Projects = () => {
    const [isEmerge, setEmerge] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setEmerge(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className='flex min-h-screen flex-col gap-24 bg-first p-8 pt-0 lg:p-24'>
            <div>
                <h2
                    className={clsx(
                        'text-center font-primary text-4xl/normal font-bold text-secund opacity-0 md:text-6xl/normal',
                        isEmerge && 'animate-translate-up',
                    )}
                >
                    Projects
                </h2>
            </div>
            <ul className='mx-auto w-full max-w-600 flex-1 columns-sm gap-8 sm:columns-2 md:gap-12 lg:columns-sm'>
                {projectList.map(project => (
                    <li key={project.id} className='not-last:mb-12'>
                        <CardProject {...project} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default memo(Projects);
