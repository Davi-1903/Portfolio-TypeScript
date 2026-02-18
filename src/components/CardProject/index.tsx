import type { Project } from '../../interfaces/Objects';

export default function CardProject({ name, description, projectURL, imageURL }: Project) {
    return (
        <a href={projectURL} target='_blank'>
            <article className='flex h-full flex-col gap-4 border-2 border-black bg-white p-4 transition-all duration-125 hover:-translate-2 hover:shadow-basic'>
                <img src={imageURL} alt={`Project ${name}`} className='border-2 border-black' />
                <h3 className='font-primary text-4xl font-bold text-black'>{name}</h3>
                <p className='font-secundary text-2xl text-black'>{description}</p>
            </article>
        </a>
    );
}
