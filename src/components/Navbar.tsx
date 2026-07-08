import NavLink from "./NavLink.tsx";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {Menu, Sun, X} from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <>
            <div className={styles.navbarDesktop}>
                <div>
                    <img src="/fox.png" alt="fox icon" className={styles.icon}/>
                </div>

                <div className={styles.links}>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#tech">Technologies</NavLink>
                    <NavLink href="#contacts">Contacts</NavLink>
                </div>

                <div className={styles.settings}>
                    <button className={styles.theme}><Sun size={30}/></button>
                    <p>EN</p>
                </div>
            </div>

            <div>
                <Disclosure as="div" className={styles.navbarMobile}>
                    <div>
                        <img src="/fox.png" alt="fox icon" className={styles.icon}/>
                    </div>
                    <DisclosureButton className={styles.menu}>
                        {({open}) => open ? <X /> : <Menu />}
                    </DisclosureButton>
                    <DisclosurePanel className={styles.panel}>
                        {({close}) => (
                            <div className={styles.links} onClick={() => close()}>
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