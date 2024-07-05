import ReactMarkdown from "react-markdown";
import { Route, Routes, useParams } from "react-router-dom";
import PostModelo from "src/componentes/PostModelo";
import posts from "src/json/posts.json";
import styles from "./Post.module.css";
import NaoEncontrada from "../NaoEncontrada";
import PaginaPadrao from "src/componentes/PaginaPadrao";
import PostCard from "src/componentes/PostCard";

export default function Post() {
    const parametros = useParams();
    const post = posts.find((post) => post.id === Number(parametros.id));
    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    if (!post) {
        return <NaoEncontrada />;
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route
                    index
                    element={
                        <PostModelo
                            fotoCapa={`/assets/posts/${post.id}/capa.png`}
                            titulo={post.titulo}
                        >
                            <>
                                <div className={styles.postMarkdownContainer}>
                                    <ReactMarkdown>{post.texto}</ReactMarkdown>
                                </div>
                                <h2 className={styles.tituloOutrosPosts}>
                                    Outros posts que você pode gostar:
                                </h2>
                                <ul className={styles.postsRecomendados}>
                                    {postsRecomendados.map((post) => (
                                        <li key={post.id}>
                                            <PostCard post={post} />
                                        </li>
                                    ))}
                                </ul>
                            </>
                        </PostModelo>
                    }
                />
            </Route>
        </Routes>
    );
}
