import { useEffect, useRef, useState } from 'react';
import { projectList } from './projectsList';
import CardProject from '../CardProject';

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
                    className={`text-center font-primary text-4xl/normal font-bold text-black opacity-0 md:text-6xl/normal ${
                        isEmerge ? 'animate-translate-up' : ''
                    }`}
                >
                    Projects
                </h2>
            </div>
            <div
                className={`grid flex-1 grid-cols-fit-72 gap-12 opacity-0 md:grid-cols-fit-96 ${
                    isEmerge ? 'animate-translate-down' : ''
                }`}
            >
                {projectList.map(project => (
                    <CardProject key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
