import { useEffect, useRef, useState } from 'react';
import type { Project } from '../../interfaces/Objects';
import Technology from '../Technology';
import Contributor from '../Contributor';
import clsx from 'clsx';

export default function CardProject({ name, description, projectURL, imageURL, team, technologies }: Project) {
    const [isEmerge, setEmerge] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries =>
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setEmerge(true);
                        observer.unobserve(entry.target);
                    }
                }),
            { threshold: 0.25 },
        );

        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <a href={projectURL}>
            <article
                ref={cardRef}
                className={clsx(
                    'flex break-inside-avoid flex-col gap-4 bg-white-100 p-4 opacity-0 transition-all duration-125 not-dark:border-2 not-dark:border-black-100 hover:not-dark:-translate-2 hover:not-dark:shadow-basic dark:bg-white-200 hover:dark:-translate-y-2',
                    isEmerge && 'animate-translate-down',
                )}
            >
                <img src={imageURL} alt={`Project ${name}`} className='border-2 border-black-100' />
                <h3 className='font-primary text-4xl font-bold text-black-100'>{name}</h3>
                <p className='font-secundary text-2xl text-black-100'>{description}</p>
                {team && (
                    <>
                        <h4 className='font-primary text-2xl font-bold text-black-100'>Team</h4>
                        <ul className='flex flex-wrap gap-2'>
                            {team.map(contributor => (
                                <li key={contributor.id}>
                                    <Contributor {...contributor} />
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                <h4 className='font-primary text-2xl font-bold text-black-100'>Technologies</h4>
                <ul className='flex flex-wrap gap-2'>
                    {technologies.map((technology, idx) => (
                        <li key={idx}>
                            <Technology technology={technology} />
                        </li>
                    ))}
                </ul>
            </article>
        </a>
    );
}
