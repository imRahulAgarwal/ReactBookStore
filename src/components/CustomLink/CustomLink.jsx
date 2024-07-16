import { NavLink } from "react-router-dom";
import styles from "./CustomLink.module.css";
import { memo } from "react";

function CustomLink({ name, href }) {
    return (
        <NavLink to={href} className={({ isActive }) => (isActive ? styles.activeLink : styles.inActiveLink)}>
            {name}
        </NavLink>
    );
}

export default memo(CustomLink);
