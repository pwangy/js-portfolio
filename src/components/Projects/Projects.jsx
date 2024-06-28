import styles from './Projects.module.scss'
import projects from '../../data/projects.json'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
    const listProjects = projects.map((project, id) => <ProjectCard key={id} project={project} />)

    return (
        <section className={styles.container} id='projects'>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>{listProjects}</div>
        </section>
)}