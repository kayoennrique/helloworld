import styles from './Banner.module.css';
import coloredCircle from 'assets/colored_circle.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.presentation}>
                <h1 className={styles.title}>
                    Hello, World...
                </h1>
                <p className={styles.paragraph}>
                Welcome to my personal space! I'm Kayo Ennrique, studying Front-end at Alura.<br /> Here is a space where I share my projects and applications that I develop.😊
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