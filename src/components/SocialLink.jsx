

export const SocialLink = ({ href, iconSrc, altText, external = false }) => {
	return (
		<a href={href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}className='socials'>
			<img src={iconSrc} alt={altText} />
		</a>
	)
}
