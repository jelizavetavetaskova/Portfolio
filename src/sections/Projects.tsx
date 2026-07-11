import styles from "./Projects.module.css";
import Card from "../components/Card.tsx";
import {SiGithub, SiReact, SiSupabase, SiTypescript, SiVite, SiYoutube} from "react-icons/si";
import Section from "../components/Section.tsx";
import {useTranslation} from "react-i18next";

const Projects = () => {
    const {t} = useTranslation();

    return (
        <Section id="projects" title={t("projects_heading")}>
            <div className={styles.projects}>
                <Card title="SKAITRIXA" titleClassName={styles.projectTitle}>
                    <h4>{t("skaitrixa_subheading")}</h4>
                    <div className={styles.stack}>
                        <SiTypescript className={styles.icon} />
                        <SiReact className={styles.icon}/>
                        <SiSupabase className={styles.icon} />
                        <SiVite className={styles.icon} />
                    </div>
                    <div className={styles.description}>
                        <p>{t("skaitrixa_description")}</p>
                    </div>
                    <div className={styles.links}>
                        <a href="https://github.com/jelizavetavetaskova/skaitrixa"><SiGithub/></a>
                        <a href="https://youtu.be/FYpPr9n7ZOU"><SiYoutube /></a>
                    </div>
                </Card>
                <Card title={t("projects_coming_soon")} titleClassName={styles.projectTitle}>
                    <h4>{t("projects_coming_soon_description")}</h4>
                </Card>
            </div>
        </Section>
    )
}

export default Projects;