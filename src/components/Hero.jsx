
import socials from '../data/socials.json'
import { SocialLink } from './SocialLink'
import { getImageUrl } from '../utils'

export const Hero = () => {
    const listSocials = socials.map((social, id) => (
        <SocialLink key={id} iconSrc={getImageUrl(`contact/${social.iconName}`)} href={social.href} altText={social.altText} aria-label={social.aria} external={social.external} />
    ))

    return (
        <section className='hero'>
            <div className='hero-flex'>
                <h1 className='type-header'>Peggy Wang</h1>
                <p className='hero-title'>Frontend Engineer</p>
                <p className='hero-title'>+ Designer</p>
            </div>
            <nav className='socials' aria-label='Social media links'>{listSocials}</nav>
        </section>
)}