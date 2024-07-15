import { getImageUrl } from '../utils'

export const About = () => {
    return (
        <section className='container about' id='about'>
            <h2 className='h2Dark'>About</h2>
            <div className='aboutContent'>
                <ul className='aboutItems'>
                    <li className='aboutItem gLight'>
                        <img src={getImageUrl('about/serverIcon.png')} alt='cursor icon' />
                        <div className='aboutItemText'>
                            <h3>Full Stack Developer</h3>
                            <p>I&apos;m a frontend developer with experience in building responsive
                            and optimized sites. I have experience developing fast and optimised back-end systems
                            and APIs.</p>
                        </div>
                    </li>
                    <li className='aboutItem gLight'>
                        <img src={getImageUrl('about/cursorIcon.png')} alt='UI icon' />
                        <div className='aboutItemText'>
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing pages and have created design systems as well</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
)}