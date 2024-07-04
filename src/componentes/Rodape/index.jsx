import styles from "./Rodape.module.css";

import MarcaRegistrada from "src/assets/marca_registrada.svg?react";

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            Desenvolvido por Leandro Souza
        </footer>
    );
}
