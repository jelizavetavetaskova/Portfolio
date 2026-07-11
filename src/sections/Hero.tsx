import styles from "./Hero.module.css";
import {useTranslation} from "react-i18next";

const Hero = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.hero}>
            <div className={styles.about}>
                <div className={styles.hello}>
                    <p>{t("greeting")}</p>
                    <h1><span>Fullstack</span> {t("developer")}</h1>
                </div>
                <div className={styles.description}>
                    <p>{t("hero_description")}</p>
                </div>
                <div className={styles.buttons}>
                    <a href="#projects" className={styles.projectsLink}>{t("my_projects_btn")}</a>
                    <a href="/Jelizaveta_Vetaskova_Resume.pdf" className={styles.cvButton} download>{t("cv_btn")}</a>
                </div>
            </div>

            <div className={styles.mascot}>
                <img src="/fox-for-about.png" alt="fox"/>
            </div>
        </section>
    )
}

export default Hero;