import projects from '../data/projects.json'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
    const listProjects = projects.map((project, id) => <ProjectCard key={id} project={project} {...project} />)

    return (
        <section className='pContainer' id='projects'>
            <h2 className='pTitle'>Projects</h2>
            <div className='projects'>{listProjects}</div>
        </section>
)}