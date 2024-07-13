import { getImageUrl } from '../utils'

export const Contact = () => {
    return (
        <footer id='contact' className='contactContainer'>
            <div className='contactText'>
                <h2>Contact</h2>
                <p>Get in touch</p>
            </div>

            <ul className='contactLinks'>
                <li className='contactLink'>
                    <img src={getImageUrl('contact/emailIcon.png')} alt='email icon' />
                    <a href='mailto:blipsandclicks@gmail.com'>blipsandclicks@gmail.com</a>
                </li>
                <li className='contactLink'>
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt='LinkedIn icon' />
                    <a href='https://www.linkedin.com/in/peggywang/'>Linkedin.com/peggywang</a>
                </li>
                <li className='contactLink'>
                    <img src={getImageUrl('contact/githubIcon.png')} alt='Github icon' />
                    <a href='https://github.com/pwangy'>github.com/pwangy</a>
                </li>
            </ul>
        </footer>
)}