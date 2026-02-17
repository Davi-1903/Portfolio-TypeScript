import type { CardProjectProps } from '../../interfaces/Props';

export default function CardProject({ project }: CardProjectProps) {
    return (
        <a href={project.projectURL} target='_blank'>
            <article className='flex h-full flex-col gap-4 border-2 border-black bg-white p-4 transition-all duration-125 hover:-translate-2 hover:shadow-basic'>
                <img src={project.imageURL} alt={`Project ${project.name}`} className='border-2 border-black' />
                <h3 className='font-primary text-4xl font-bold text-black'>{project.name}</h3>
                <p className='font-secundary text-2xl text-black'>{project.description}</p>
                <ul className='flex flex-1 flex-wrap content-end gap-2'>
                    {project.technologies.map((technology, idx) => (
                        <li
                            key={idx}
                            className='flex gap-2 rounded-lg border-2 border-black px-2 py-1 font-primary text-black'
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
