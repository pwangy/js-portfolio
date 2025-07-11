

export const SocialLink = ({ href, iconSrc, altText, aria, external = false }) => {
	return (
		<a href={href} className='socials' aria-label={aria} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>
			<img src={iconSrc} alt={altText} />
		</a>
	)
}
