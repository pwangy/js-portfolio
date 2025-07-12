import { getImageUrl } from '../utils'
import github from '../assets/contact/githubicon.png'
import link from '../assets/projects/link.png'
export const ProjectCard = ({
	project: { title, imageSrc, description, skills, demo, source }
}) => {
	const listProjectSkills = skills.map((skill, id) => (
		<li key={id} className='skill-chip type-special border-curve'>
			{skill}
		</li>
	))

	return (
		<div className='container card'>
			{/* thumbnail */}
			<img
				src={getImageUrl(imageSrc)}
				alt={`Screenshot of ${title} project`}
				className='card-thumbnail border-curve'
				loading='lazy'
			/>
			<div className='card-header'>
				<h3>{title}</h3>
				{/* demo link */}
				<a href={demo} target='_blank' rel='noopener noreferrer'>
					<img src={link} alt='Link project demo' />
				</a>
			</div>
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
