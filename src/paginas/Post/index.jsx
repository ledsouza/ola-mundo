import ReactMarkdown from "react-markdown";
import { Route, Routes, useParams } from "react-router-dom";
import PostModelo from "src/componentes/PostModelo";
import posts from "src/json/posts.json";
import styles from "./Post.module.css";
import NaoEncontrada from "../NaoEncontrada";
import PaginaPadrao from "src/componentes/PaginaPadrao";

export default function Post() {
    const parametros = useParams();
    const post = posts.find((post) => post.id === Number(parametros.id));

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
                            <div className={styles.postMarkdownContainer}>
                                <ReactMarkdown>{post.texto}</ReactMarkdown>
                            </div>
                        </PostModelo>
                    }
                />
            </Route>
        </Routes>
    );
}
