import type { CardProjectProps } from '../../interfaces/Props';
import Contributor from '../Contributor';
import Skill from '../Skill';

export default function CardProject({ project }: CardProjectProps) {
    return (
        <a href={project.projectURL} target='_blank'>
            <article className='flex h-full flex-col gap-4 border-2 border-black bg-white p-4 transition-all duration-125 hover:-translate-2 hover:shadow-basic'>
                <img src={project.imageURL} alt={`Project ${project.name}`} className='border-2 border-black' />
                <h3 className='font-primary text-4xl font-bold text-black'>{project.name}</h3>
                <p className='font-secundary text-2xl text-black'>{project.description}</p>
                {project.contributors && (
                    <>
                        <h2 className='font-primary text-2xl font-bold text-black'>Contributors</h2>
                        <ul className='flex flex-wrap gap-2'>
                            {project.contributors?.map(contributor => (
                                <li key={contributor.id}>
                                    <Contributor name={contributor.name} url={contributor.url} />
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                <h2 className='font-primary text-2xl font-bold text-black'>Technologies</h2>
                <ul className='flex flex-wrap gap-2'>
                    {project.technologies.map((technology, idx) => (
                        <li key={idx}>
                            <Skill technology={technology} />
                        </li>
                    ))}
                </ul>
            </article>
        </a>
    );
}
