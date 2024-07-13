import skills from '../data/skills.json'
import history from '../data/history.json'
import { getImageUrl } from '../utils'

export const Experience = () => {
    const listSkills = skills.map((skill, id) => 
        <div key={id} className='skill'>
            <div className='skillImageContainer'>
                {/* <img src={getImageUrl(skill.imageSrc)} alt={skill.title} /> */}
            </div>
            <p>{skill.title}</p>
        </div>)

    const listHistory = history.map((historyItem, id) => 
        <li key={id} className='historyItem'>
                <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} logo`} />
            <div className='historyItemDetails'>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>{historyItem.experiences.map((experience, id) => {return <li key={id}>{experience}</li>})}</ul>
            </div>
        </li>)

    return (
        <section className='expContainer' id='experience'>
            <h2 className='expTitle'>Experience</h2>
            <div className='expWrapper'>
                <div className='expContent'>
                    <div className='skills'>{listSkills}</div>
                </div>
                <ul className='history'>
                    {listHistory}
                </ul>
            </div>
        </section>
)}