import NavLink from "./NavLink.tsx";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {Menu, Moon, Sun, X} from "lucide-react";
import styles from "./Navbar.module.css";
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.ts";
import {useTranslation} from "react-i18next";

const Navbar = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const {t} = useTranslation();

    return (
        <>
            <div className={styles.navbarDesktop}>
                <div>
                    <img src="/fox.png" alt="fox icon" className={styles.icon}/>
                </div>

                <div className={styles.links}>
                    <NavLink href="#about">{t("navbar_about")}</NavLink>
                    <NavLink href="#skills">{t("navbar_skills")}</NavLink>
                    <NavLink href="#projects">{t("navbar_projects")}</NavLink>
                    <NavLink href="#contacts">{t("navbar_contacts")}</NavLink>
                </div>

                <div className={styles.settings}>
                    <button
                        className={styles.theme}
                            onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}
                    >
                        {theme === "dark" ?
                            <Sun size={30}/>
                            :
                            <Moon size={30}/>
                        }
                    </button>
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
                                <NavLink href="#about">{t("navbar_about")}</NavLink>
                                <NavLink href="#skills">{t("navbar_skills")}</NavLink>
                                <NavLink href="#projects">{t("navbar_projects")}</NavLink>
                                <NavLink href="#contacts">{t("navbar_contacts")}</NavLink>
                            </div>)}
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </>
    )
}

export default Navbar;