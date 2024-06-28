import styles from './About.module.scss'
import { getImageUrl } from '../../utils'

export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl('about/aboutImage.png')} alt='' />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/serverIcon.png')} alt='cursor icon' />
                        <div className={styles.aboutItemText}>
                            <h3>Full Stack Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive
                            and optimized sites. I have experience developing fast and optimised back-end systems
                            and APIs.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/cursorIcon.png')} alt='UI icon' />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing pages and have created design systems as well</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
)}