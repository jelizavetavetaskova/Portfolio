import type {ReactNode} from "react";

interface NavLinkProps {
    href: string;
    children: ReactNode;
}

const NavLink = ({href, children}: NavLinkProps) => {
    return (
        <a href={href} className="text-lg">{children}</a>
    )
}

export default NavLink;