import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import PostModelo from "src/componentes/PostModelo";
import posts from "src/json/posts.json";
import styles from "./Post.module.css";

export default function Post() {
    const parametros = useParams();
    const post = posts.find((post) => post.id === Number(parametros.id));

    return (
        <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
            <div className={styles.postMarkdownContainer}>
                <ReactMarkdown>{post.texto}</ReactMarkdown>
            </div>
        </PostModelo>
    );
}
