import skills from '../data/skills.json'
import history from '../data/history.json'
import { getImageUrl } from '../utils'

export const Experience = () => {
    const listSkills = skills.map((skill, id) => 
        <div key={id} className='skill'>
            <p>{skill.title}</p>
        </div>)

    const listHistory = history.map((historyItem, id) => 
        <li key={id} className='historyItem gDark'>
                <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} logo`} />
            <div className='historyItemDetails'>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>{historyItem.experiences.map((experience, id) => {return <li key={id}>{experience}</li>})}</ul>
            </div>
        </li>)

    return (
        <section className='container exp gPuttySky' id='experience'>
            <h2>Experience</h2>
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