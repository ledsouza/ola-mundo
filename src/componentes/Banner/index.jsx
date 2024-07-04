import styles from "./Banner.module.css";
import circuloColorido from "src/assets/circulo_colorido.png";
import minhaFoto from "src/assets/minha_foto.jpeg";

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, Mundo!</h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Leandro Souza, desenvolvedor Fullstack
                    e Cientista de Dados. Aqui compartilho vários conhecimentos, espero que aprenda
                    algo novo :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img src={circuloColorido} aria-hidden className={styles.circuloColorido} />
                <img src={minhaFoto} alt="Uma foto do Leandro Souza" className={styles.minhaFoto} />
            </div>
        </section>
    );
}
