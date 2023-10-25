import { Link } from 'react-router-dom';
import styles from './Post.module.css';

export default function PostCard({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.cover}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do post"
                />

                <h2 className={styles.title}>{post.title}</h2>

                <button className={styles.buttonRead}>Ler</button>
            </div>
        </Link>

    )
}