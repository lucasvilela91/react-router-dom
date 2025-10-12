import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <NavLink 
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} 
                    to="/"
                >
                    Início
                </NavLink>
                <NavLink 
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} 
                    to="/sobremim"
                >
                    Sobre Mim
                </NavLink>
            </nav>
        </header>
    )
}