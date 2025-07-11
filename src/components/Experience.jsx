import exp from '../data/exp.json'
import { getImageUrl } from '../utils'

export const Experience = () => {
    const listExp = exp.map((expItem, id) => 
        <li key={id} className='expItem'>
                <img src={getImageUrl(expItem.imageSrc)} alt={`${expItem.organisation} logo`} />
            <div className='expItemDetails'>
                <h3>{`${expItem.role}, ${expItem.organisation}`}</h3>
                <p>{`${expItem.startDate} - ${expItem.endDate}`}</p>
                <ul>{expItem.experiences.map((experience, id) => {return <li key={id}>{experience}</li>})}</ul>
            </div>
        </li>)

    return (
        <section className='container' id='experienceandeducation' aria-label='Experience and Education'>
            <h2 className='noBottomMargin'>Experience + Education</h2>
            <div className='expWrapper'>
                <ul className='exp'>
                    {listExp}
                </ul>
            </div>
        </section>
)}

// update exp descriptions

// expWrapper style is under tablet media query
