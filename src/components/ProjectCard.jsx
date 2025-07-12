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
			<img
				src={getImageUrl(imageSrc)}
				alt={`Screenshot of ${title} project`}
				className='card-thumbnail border-curve'
				loading='lazy'
			/>
			<div className='card-header'>
				<h3>{title}</h3>
				{/* demo */}
				<a
					href={demo}
					target='_blank'
					rel='noopener noreferrer'>
					<img
						src={link}
						className='link-ico'
						alt='Link project demo'
					/>
				</a>
			</div>

			{/* repo */}
			<p className='card-description card-spacer'>
				{description}{' '}
				<a
					href={source}
					className='card-link type-special border-curve'
					target='_blank'
					rel='noopener noreferrer'>
					<img src={github} alt='Link to GitHub repo' />
				</a>
				<span className='card-link-container'></span>
			</p>

			{/* project skills */}
			<ul
				className='card-skills-container'
				aria-label='Technologies used'>
				{listProjectSkills}
			</ul>
		</div>
	)
}
