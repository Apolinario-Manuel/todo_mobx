import styles from './index.module.css'
import todoLogo from '../../assets/logo.svg';

export const Header = () => (
    <header className={styles.header}>
        <img src={todoLogo} alt='Todo logo' />
    </header>
)