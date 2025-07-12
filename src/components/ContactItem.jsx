export const ContactItem = ({ href, iconSrc, altText, aria, label, external = false}) => {
	return (
		<li className='contact-link'>
			<img src={iconSrc} alt={altText} />
			<a
				href={href}
				aria-label={aria}
				{...(external && {
					target: '_blank',
					rel: 'noopener noreferrer'
				})}>
				<span>{label}</span>
			</a>
		</li>
	)
}
