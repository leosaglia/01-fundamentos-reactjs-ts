import styles from './Header.module.css';
import TodoLogo from '../assets/todo-logo.svg';

export function Header() {
    return (
        <header className={styles.Header}>
            <img src={TodoLogo} alt="todo logo" />
        </header>        
    )
}