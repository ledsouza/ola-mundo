import { useParams } from "react-router-dom";

export default function Post() {
    const parametros = useParams();
    return <h2>Conteúdo do Post {parametros.id}</h2>;
}
