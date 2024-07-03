import styles from "./MenuLink.module.css";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function MenuLink({ children, to }) {
    const localizacao = useLocation();

    return (
        <Link
            className={`${styles.link} ${localizacao.pathname === to ? styles.linkDestacado : ""}`}
            to={to}
        >
            {children}
        </Link>
    );
}

MenuLink.propTypes = {
    children: PropTypes.string,
    to: PropTypes.string,
};
