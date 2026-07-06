import NavLink from "./NavLink.tsx";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {Menu, Sun, X} from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <div className="navbar-desktop">
                <div>
                    <img src="/fox.png" alt="fox icon" className="icon"/>
                </div>

                <div className="links">
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#tech">Technologies</NavLink>
                    <NavLink href="#contacts">Contacts</NavLink>
                </div>

                <div className="settings">
                    <button className="theme"><Sun size={30}/></button>
                    <p>EN</p>
                </div>
            </div>

            <div>
                <Disclosure as="div" className="navbar-mobile">
                    <div>
                        <img src="/fox.png" alt="fox icon" className="icon"/>
                    </div>
                    <DisclosureButton className="menu">
                        {({open}) => open ? <X /> : <Menu />}
                    </DisclosureButton>
                    <DisclosurePanel className="panel">
                        {({close}) => (
                            <div className="links" onClick={() => close()}>
                                <NavLink href="#about">About</NavLink>
                                <NavLink href="#skills">Skills</NavLink>
                                <NavLink href="#projects">Projects</NavLink>
                                <NavLink href="#tech">Technologies</NavLink>
                                <NavLink href="#contacts">Contacts</NavLink>
                            </div>)}
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </>
    )
}

export default Navbar;