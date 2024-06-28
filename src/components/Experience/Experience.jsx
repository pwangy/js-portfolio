import styles from './Experience.module.scss'
import skills from '../../data/skills.json'
import history from '../../data/history.json'
import { getImageUrl } from '../../utils'

export const Experience = () => {
    const listSkills = skills.map((skill, id) => 
        <div key={id} className={styles.skill}>
            <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
        </div>)

    const listHistory = history.map((historyItem, id) => 
        <li key={id} className={styles.historyItem}>
            <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} logo`} />
            <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>{historyItem.experiences.map((experience, id) => {return <li key={id}>{experience}</li>})}</ul>
            </div>
        </li>)

    return (
        <section className={styles.container} id='experience'>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.skills}>{listSkills}</div>
                </div>
                <ul className={styles.history}>
                    {listHistory}
                </ul>
            </div>
        </section>
)}