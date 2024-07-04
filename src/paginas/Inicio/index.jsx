import styles from "./Inicio.module.css";
import Post from "src/componentes/Post";

import posts from "src/json/posts.json";

export default function Inicio() {
    return (
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <Post post={post} />
                </li>
            ))}
        </ul>
    );
}
