// import { bool, func } from 'prop-types'
// import styles from './Burger.module.scss'

export const Burger = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    // const isExpanded = open ? true : false

    return (
        <button popovertarget='burgerpop'>burger menu
            <span />
            <span />
            <span />
        </button>
    )
} 