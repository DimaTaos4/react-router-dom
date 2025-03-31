import styles from './MainMenu.module.css'
import { NavLink } from 'react-router-dom'

export default function MainMenu() {
    return (
        <ul className={styles.menu}>
            <li >
                <NavLink className={styles.menuItem} to='/homepage' >Главная</NavLink>
            </li>
            <li >
                <NavLink className={styles.menuItem} to='/articles'>Статьи</NavLink>
            </li>
        </ul>
    )
} 