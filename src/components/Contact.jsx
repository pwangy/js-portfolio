import socials from '../data/socials.json'
import { ContactItem } from './ContactItem'
import { getImageUrl } from '../utils'

export const Contact = () => {
    const listSocials = socials.map((social, id) => (
        <ContactItem key={id} iconSrc={getImageUrl(`contact/${social.iconName}`)} href={social.href} label={social.label} altText={social.altText} external={social.external} />
    ))

    return (
        <footer id='contact' className='container contact' aria-label="Contact information">
            <div className='contactText'><h2>Contact</h2></div>
            <ul className='contactLinks'>{listSocials}</ul>
        </footer>
)}