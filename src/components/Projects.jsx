import projects from '../data/projects.json'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
    const listProjects = projects.map((project, id) => <ProjectCard key={id} project={project} {...project} />)

    return (
        <section className='container projects' id='projects'>
            <h2 className='h2Dark'>Projects</h2>
            <div className='pWrapper'>{listProjects}</div>
        </section>
)}