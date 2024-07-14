import { getImageUrl } from '../utils'

export const ProjectCard = ({project: {title, imageSrc, description, skills, demo, source},}) => {
    const listProjectSkills = skills.map((skill, id) => <li key={id} className='cardSkill typeSpecial'>{skill}</li>)

    return (
        <div className='container card'>
            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className='cardImage' />
            <h3 className='cardTitle'>{title}</h3>
            <p className='description'>{description}</p>
            <ul className='cardSkills'>
                {listProjectSkills}
            </ul>
            <div className='cardLinks'>
                <a href={demo} className='cardLink typeSpecial'>Demo</a>
                <a href={source} className='cardLink typeSpecial'>Source</a>
            </div>
        </div>
)}