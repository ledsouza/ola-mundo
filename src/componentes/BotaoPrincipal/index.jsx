import styles from "./BotaoPrincipal.module.css";
import PropTypes from "prop-types";

export default function botaoPrincipal({ children, tamanho }) {
    return <button className={`${styles.botaoPrincipal} ${styles[tamanho]}`}>{children}</button>;
}

botaoPrincipal.propTypes = {
    children: PropTypes.string.isRequired,
    tamanho: PropTypes.string,
};
