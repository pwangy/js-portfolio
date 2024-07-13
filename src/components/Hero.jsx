import '../styles/hero.scss'
import { getImageUrl } from '../utils'

export const Hero = () => {
    return (
        <section className='heroContainer'>
            <div className='content'>
                <h1 className='name'>Peggy Wang</h1>
                <p className='heroTitle'>Frontend Developer + Designer</p>

                    <a href='mailto:blipsandclicks@gmail.com' className='contactBtn'>
                        <img className='fa' alt='envelope icon' src={getImageUrl('fontawesome/envelope-regular.svg')} />
                        email me
                    </a>

            </div>
           
            <div className='heroImg' />
            <div className='topBlur' />
            <div className='bottomBlur' />
        </section>
)}