import skills from '../data/skills.json'
// import { getImageUrl } from '../utils'

export const Toolbox = () => {
    const listSkills = skills.map((skill, id) => 
        <div key={id} className='skill'>
            <p>{skill.title}</p>
        </div>)

    return (
        <section className='container exp gPuttySky' id='experience'>
            <h2>Skills </h2>
            <div className='expWrapper'>
                <div className='expContent'>
                    <div className='skills'>{listSkills}</div>
                </div>
            </div>
        </section>
)}