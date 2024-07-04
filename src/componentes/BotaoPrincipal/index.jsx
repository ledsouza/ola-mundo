import styles from "./BotaoPrincipal.module.css";
import PropTypes from "prop-types";

export default function botaoPrincipal({ children }) {
    return <button className={styles.botaoPrincipal}>{children}</button>;
}

botaoPrincipal.propTypes = {
    children: PropTypes.string.isRequired,
};
