import PostModelo from "src/componentes/PostModelo";
import styles from "./SobreMin.module.css";
import fotoCapa from "src/assets/sobre_mim_capa.png";
import fotoSobreMin from "src/assets/minha_foto.jpeg";
import { LoremIpsum } from "react-lorem-ipsum";

export default function SobreMin() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre min">
            <h3 className={styles.subtitulo}>Olá, eu sou o Leandro!</h3>
            <img src={fotoSobreMin} alt="Foto do Leandro Souza" className={styles.fotoSobreMim} />
            <span className={styles.paragrafo}>
                <LoremIpsum p={6} />
            </span>
        </PostModelo>
    );
}
