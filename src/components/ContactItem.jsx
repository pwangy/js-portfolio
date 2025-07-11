

export const ContactItem = ({ href, iconSrc, altText, label, external = false }) => {
    return (
        <li className='contactLink'>
            <img src={iconSrc} alt={altText} />
            <a href={href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>{label}</a>
        </li>
)}