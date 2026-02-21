import { memo, useEffect, useRef, useState } from 'react';
import { IconArrowUpRight } from '@tabler/icons-react';
import type { Project } from '../../../interfaces/Objects';
import Technology from '../../Technology';
import Contributor from './Contribuitor';
import clsx from 'clsx';

function CardProject({ name, description, projectURL, imageURL, team, technologies }: Project) {
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
        <article
            ref={cardRef}
            className={clsx(
                'flex -translate-2 break-inside-avoid flex-col gap-4 border-2 border-black-100 bg-white-100 p-4 opacity-0 not-dark:shadow-basic',
                isEmerge && 'animate-translate-down',
            )}
        >
            <img src={imageURL} alt={`Project ${name}`} className='border-2 border-black-100' loading='lazy' />
            <h3 className='font-primary text-4xl font-bold text-black-100'>{name}</h3>
            <p className='font-secundary text-2xl text-black-100 dark:text-black-50'>{description}</p>
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
            <a href={projectURL} target='_blank' className='mt-2 w-full bg-orange-600 md:w-fit'>
                <button className='group relative w-full cursor-pointer self-start overflow-x-hidden border-2 border-black-100 bg-black-100 px-4 py-2 font-primary text-lg font-semibold text-white-100 transition-all duration-250 not-dark:hover:text-black-100 md:hover:pr-14 dark:bg-white-100 dark:text-black-100 dark:hover:text-white-100'>
                    <div className='absolute top-0 left-0 h-full w-0 bg-white-100 transition-all duration-250 group-hover:w-full dark:bg-black-100'></div>
                    <span className='relative'>View on Github</span>
                    <IconArrowUpRight
                        size={32}
                        className='absolute top-1/2 right-0 translate-x-full -translate-y-1/2 transition-all duration-250 group-hover:right-4 group-hover:translate-x-0'
                    />
                </button>
            </a>
        </article>
    );
}

export default memo(CardProject);
