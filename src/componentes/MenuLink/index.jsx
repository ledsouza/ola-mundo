import styles from "./MenuLink.module.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function MenuLink({ children, to }) {
    return (
        <NavLink
            className={({ isActive }) => `${styles.link} ${isActive ? styles.linkDestacado : ""}`}
            to={to}
            end
        >
            {children}
        </NavLink>
    );
}

MenuLink.propTypes = {
    children: PropTypes.string,
    to: PropTypes.string,
};
