import { getImageUrl } from '../utils'
import { LinkPopout } from '../assets/icons/LinkPopout'
import github from '../assets/icons/githubicon.png'

export const ProjectCard = ({
	project: { title, imageSrc, description, skills, demo, source }
}) => {
	const listProjectSkills = skills.map((skill, id) => (
		<li key={id} className='skill-chip type-special border-curve'>
			{skill}
		</li>
	))

	return (
		<div className='card'>
			{/* thumbnail */}
			<img
				src={getImageUrl(imageSrc)}
				alt={`Screenshot of ${title} project`}
				className='card-thumbnail border-curve'
				loading='lazy'
			/>
			{/* demo link */}
			<a className='card-header' href={demo} target='_blank' rel='noopener noreferrer'>
				<h3>{title}</h3>
				<LinkPopout className='live-link-icon' aria-hidden='true' />
			</a>
			<p className='card-description card-spacer'>{description}</p>
			{/* github link */}
			<a
				href={source}
				className='card-spacer'
				target='_blank'
				rel='noopener noreferrer'>
				<img
					src={github}
					className='source-link'
					alt='Link to GitHub repo'
				/>
			</a>
			{/* project skills */}
			<ul
				className='card-skills-container'
				aria-label='Technologies used'>
				{listProjectSkills}
			</ul>
		</div>
	)
}
