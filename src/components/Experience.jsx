import history from '../data/history.json'
import { getImageUrl } from '../utils'

export const Experience = () => {
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
                <ul className='history'>
                    {listHistory}
                </ul>
            </div>
        </section>
)}