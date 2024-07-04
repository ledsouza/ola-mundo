import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./PostCard.module.css";

export default function PostCard({ post }) {
    return (
        <Link to={`/post/${post.id}`}>
            <div className={styles.post}>
                <img
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do post"
                    className={styles.capa}
                />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <button className={styles.botaoLer}>Ler</button>
            </div>
        </Link>
    );
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
};
