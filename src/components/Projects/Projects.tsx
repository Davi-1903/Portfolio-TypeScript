import type { JSX } from 'react';
import SectionEmerge from '../SectionEmerge/SectionEmerge';
import { projectList } from './projectsList';
import type { CardProjectProps } from '../../interfaces/Props';
import './Projects.css';

function CardProject({ project }: CardProjectProps): JSX.Element {
    return (
        <a href={project.projectURL} target='_blank'>
            <article className='project-card'>
                <img src={project.imageURL} alt={`Project ${project.name}`} />
                <div className='text-container'>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            </article>
        </a>
    );
}

export default function Projects(): JSX.Element {
    return (
        <SectionEmerge threshold={0.1}>
            <section className='projects'>
                <div className='title-container'>
                    <h2>Projects</h2>
                </div>
                <div className='projects-container'>
                    {projectList.map(project => (
                        <CardProject key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </SectionEmerge>
    );
}
