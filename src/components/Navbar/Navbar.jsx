import { useState } from 'react'
import styles from './Navbar.module.scss'
// import { Burger } from './Burger'
// import { getImageUrl } from '../../utils'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className={styles.navbar}>
            <div className={styles.leftWrap}>
                <section className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} alt='menu-button' >
                    <div className={styles.burgerWrapper}>
                        <span className={styles.bar} />
                        <span className={styles.bar} />
                        <span className={styles.bar} />
                    </div>
                </section>
                <a className={styles.title} href='/'>Portfolio</a>
            </div>
 

            <div className={styles.menu}>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#experience'>Experience</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </nav>
)}

// fix hamburger menu open/close buttons. 
// > convert to divs
// > make x part of the gradient container.
// > fix alignment of x