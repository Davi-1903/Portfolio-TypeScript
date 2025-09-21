import type { JSX } from 'react';
import SectionEmerge from '../SectionEmerge/SectionEmerge';
import { projectList, type Project } from './projectsList';
import './Projects.css';

interface CardProjectProps {
    project: Project;
}

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
        <SectionEmerge threshold={0.2}>
            <section className='projects'>
                <div className='title-container'>
                    <div className='title-wrapper'>
                        <h2>Projects</h2>
                    </div>
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
