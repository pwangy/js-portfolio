import exp from '../data/exp.json'

export const Experience = () => {
    const listExp = exp.map((expItem, id) => 
        <li key={id} className='exp-card'>
            <div className='exp-description'>
                <h3>{`${expItem.role}`} &nbsp; | &nbsp; {`${expItem.organisation}`}</h3>
                <p className='card-spacer'>{`${expItem.startDate} — ${expItem.endDate}`}</p>
                <ul className='card-spacer'>{expItem.experiences.map((experience, id) => {return <li key={id}>{experience}</li>})}</ul>
            </div>
        </li>)

    return (
        <section className='container' id='experienceandeducation' aria-label='Experience and Education'>
            <h2>Experience + Education</h2>
            <div>
                <ul className='exp'>{listExp}</ul>
            </div>
            {/* link to download resume */}
        </section>
)}