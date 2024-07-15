// import '../styles/hero.scss'
import { getImageUrl } from '../utils'

export const Hero = () => {
    return (
        <section className='container hero'>
            <div className='heroText'>
                <h1 className='typeHeader'>Peggy Wang</h1>
                <p className='heroTitle'>Frontend Developer</p>
                <p className='heroTitle'>+ Designer</p>
            </div>
            <article className='socials'>
                <a href='https://www.linkedin.com/in/peggywang/' target='_blank'>
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt='LinkedIn icon' />
                </a>
                <a href='https://github.com/pwangy' target='_blank'>
                    <img src={getImageUrl('contact/githubIcon.png')} alt='Github icon' />
                </a>
                <a href='mailto:blipsandclicks@gmail.com' target='_blank'>
                    <img src={getImageUrl('contact/emailIcon.png')} alt='email icon' />
                </a>
            </article>
            <div className='heroImg' />
            <div className='topBlur' />
            <div className='bottomBlur' />
        </section>
)}