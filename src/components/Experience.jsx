import exp from '../data/exp.json'
import { LinkPopout } from '../assets/icons/LinkPopout'

// const LinkIcon = ({ className, ...props }) => (
//         <svg 
//         width="12" 
//         height="12" 
//         viewBox="0 0 24 24" 
//         fill="none" 
//         className={className}
//         {...props}
//         >
//         <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
// )

export const Experience = () => {
	const resumePath = '/assets/PWang.pdf'

	const listExp = exp.map((expItem, id) => (
		<li key={id} className='exp-card'>
			<div className='exp-description'>
				<h3>
					{`${expItem.role}`} &nbsp; - &nbsp;{' '}
					{`${expItem.organisation}`}
				</h3>
				<p className='card-spacer'>{`${expItem.startDate} — ${expItem.endDate}`}</p>
				<ul className='card-spacer'>
					{expItem.experiences.map((experience, id) => {
						return <li key={id}>{experience}</li>
					})}
				</ul>
			</div>
		</li>
	))

	return (
		<section
			className='container'
			id='experienceandeducation'
			aria-label='Experience and Education'>
			<h2>Experience + Education</h2>
			<div>
				<ul className='exp'>{listExp}</ul>
			</div>
			<div className='text-link-wrapper type-special'>
				<a
					className='text-link'
					href={resumePath}
					target='_blank'
					rel='noopener noreferrer'>
					view full résumé
					<LinkPopout className='text-link-icon' aria-hidden='true' />
				</a>
			</div>
		</section>
	)
}
