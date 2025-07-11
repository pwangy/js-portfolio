
import socials from '../data/socials.json'
import { SocialLink } from './SocialLink'
import { getImageUrl } from '../utils'

export const Hero = () => {
    const listSocials = socials.map((social, id) => (
        <SocialLink key={id} iconSrc={getImageUrl(`contact/${social.iconName}`)} href={social.href} altText={social.altText} external={social.external} />
    ))

    return (
        <section className='container hero'>
            <div className='heroText'>
                <h1 className='typeHeader'>Peggy Wang</h1>
                <p className='heroTitle'>Frontend Developer</p>
                <p className='heroTitle'>+ Designer</p>
            </div>
            <article className='socials'>{listSocials}</article>
        </section>
)}