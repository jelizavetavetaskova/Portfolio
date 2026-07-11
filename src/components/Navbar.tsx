import NavLink from "./NavLink.tsx";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {Menu, Moon, Sun, X} from "lucide-react";
import styles from "./Navbar.module.css";
import {type ChangeEvent, useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.ts";
import {useTranslation} from "react-i18next";

const Navbar = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const {t, i18n} = useTranslation();

    const  handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
    }

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

                    <select name="language" id="language" onChange={handleLanguageChange} value={i18n.language} className={styles.langSelect}>
                        <option value="en">EN</option>
                        <option value="lv">LV</option>
                        <option value="ru">RU</option>
                    </select>
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