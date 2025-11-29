import { projectList } from './projectsList';
import type { CardProjectProps } from '../../interfaces/Props';
import { useEffect, useRef, useState } from 'react';

function CardProject({ project }: CardProjectProps) {
    return (
        <a href={project.projectURL} target='_blank'>
            <article className='bg-white h-full p-4 flex flex-col gap-4 border-2 border-black transition-all duration-125 hover:-translate-2 hover:shadow-basic'>
                <img src={project.imageURL} alt={`Project ${project.name}`} className='border-2 border-black' />
                <h3 className='font-bold text-4xl font-primary text-black'>{project.name}</h3>
                <p className='text-2xl font-secundary text-black'>{project.description}</p>
                <ul className='flex-1 flex flex-wrap content-end gap-2'>
                    {project.technologies.map((technology, idx) => (
                        <li
                            key={idx}
                            className='px-2 py-1 font-primary text-black border-2 border-black rounded-lg flex gap-2'
                        >
                            {technology.icon}
                            <span>{technology.name}</span>
                        </li>
                    ))}
                </ul>
            </article>
        </a>
    );
}

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
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className='bg-white min-h-screen p-8 pt-0 flex flex-col gap-24 md:p-24'>
            <div>
                <h2
                    className={`font-bold text-4xl/normal font-primary text-black text-center opacity-0 md:text-6xl/normal ${
                        isEmerge ? 'animate-translate-up' : ''
                    }`}
                >
                    Projects
                </h2>
            </div>
            <div
                className={`flex-1 grid grid-cols-fit-72 gap-12 md:grid-cols-fit-96 opacity-0 ${
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
