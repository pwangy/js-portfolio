import { getImageUrl } from '../utils'

export const ProjectCard = ({
	project: { title, imageSrc, description, skills, demo, source }
}) => {
	const listProjectSkills = skills.map((skill, id) => (
		<li key={id} className='cardSkill type-special'>
			{skill}
		</li>
	))

	return (
		<div className='container card'>
			<img
				src={getImageUrl(imageSrc)}
				alt={`Screenshot of ${title} project`}
				className='cardImage'
				loading='lazy'
			/>
			<h3 className='cardTitle'>{title}</h3>
			<p className='description'>{description}</p>
			<ul className='cardSkills' aria-label='Technologies used'>
				{listProjectSkills}
			</ul>
			<div className='cardLinks'>
				<a href={demo} className='cardLink typeSpecial' target='_blank' rel='noopener noreferrer'>
					Demo
				</a>
				<a href={source} className='cardLink typeSpecial' target='_blank' rel='noopener noreferrer'>
					Source
				</a>
			</div>
		</div>
	)
}
