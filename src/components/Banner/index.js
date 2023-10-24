import styles from './Banner.module.css';
import coloredCircle from 'assets/colored_circle.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.presentation}>
                <h1 className={styles.title}>
                    Hello, World!
                </h1>
                <p className={styles.paragraph}>
                Boas vindas ao meu espaço pessoal! Eu sou Kayo Ennrique, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>
            <div className={styles.images}>
                <img 
                className={styles.coloredCircle} 
                src={coloredCircle} 
                aria-hidden={true}                
                />
                <img 
                className={styles.myPicture}
                src="https://github.com/kayoennrique.png"
                alt="Foto do Kayo Ennrique"
                />
            </div>
        </div>
    )
}