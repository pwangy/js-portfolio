import { getImageUrl } from '../utils'

export const ProjectCard = ({project: {title, imageSrc, description, skills, demo, source},}) => {
    const listProjectSkills = skills.map((skill, id) => <li key={id} className='cardSkill'>{skill}</li>)

    return (
        <div className='cardContainer'>
            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className='cardImage' />
            <h3 className='cardTitle'>{title}</h3>
            <p className='description'>{description}</p>
            <ul className='cardSkills'>
                {listProjectSkills}
            </ul>
            <div className='cardLinks'>
                <a href={demo} className='cardLink'>Demo</a>
                <a href={source} className='cardLink'>Source</a>
            </div>
        </div>
)}