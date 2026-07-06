import type {ReactNode} from "react";
import "./NavLink.css";

interface NavLinkProps {
    href: string;
    children: ReactNode;
}

const NavLink = ({href, children}: NavLinkProps) => {
    return (
        <a href={href} className="link">{children}</a>
    )
}

export default NavLink;