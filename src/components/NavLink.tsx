import type {ReactNode} from "react";
import styles from "./NavLink.module.css";

interface NavLinkProps {
    href: string;
    children: ReactNode;
}

const NavLink = ({href, children}: NavLinkProps) => {
    return (
        <a href={href} className={styles.link}>{children}</a>
    )
}

export default NavLink;