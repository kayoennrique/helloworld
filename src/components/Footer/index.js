import styles from './Footer.module.css';
import { ReactComponent as Trademark } from 'assets/trademark.svg';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Trademark />

            Developed by Kayo Ennrique.
        </footer>
    )
}