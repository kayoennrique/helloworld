import styles from "./AboutMe.module.css"
import PostModel from "components/PostModel";
import photoCover from "assets/about_me_cover.png";
import photoAboutMe from "assets/my_picture.png"

export default function AboutMe(){
    return (
        <PostModel
            photoCover={photoCover}
            title="About me"
        >
            <h3 className={styles.subtitle}>
                Hello, I'm Kayo Ennrique!
            </h3>   
            <img 
                src={photoAboutMe}
                alt="Foto do Kayo sorrindo"
                className={styles.photoAboutMe}
            />

            <p className={styles.paragraph}>
                Hello! My name is Kayo Ennrique. I have a degree in Social Communication - Journalism and I'm currently transitioning to a career in Web Development.
            </p>
            <p className={styles.paragraph}>
                I'm studying in the field of Software Development at Alura, specializing as a Front-End Developer. I'm looking forward to securing a job or internship in the Web Development field, gaining experience, acquiring new knowledge, and strengthening my professional life.
            </p>
            <p className={styles.paragraph}>
                Feel free to connect with me and get in touch!
            </p>
            <p className={styles.paragraph}>
                Technologies I currently work with:
            </p>
            <p className={styles.paragraph}>
                • Front-end:
                React.js | TypeScript | JavaScript | SASS | Tailwind CSS | Styled Components | CSS | HTML 
            </p>
            <p className={styles.paragraph}>
                • Version Control and Best Practices:
                Git | GitHub | Clean Code | Accessibility
            </p>

        </PostModel>
    )
}