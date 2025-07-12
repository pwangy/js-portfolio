import projects from '../data/projects.json'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
    const listProjects = projects.map((project, id) => <ProjectCard key={id} project={project} />)

    return (
        <section className='container' id='projects' aria-label='Projects'>
            <h2>Projects</h2>
            <div className='project-wrapper projects'>{listProjects}</div>
        </section>
)}