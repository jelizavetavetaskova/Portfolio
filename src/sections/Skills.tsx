import styles from "./Skills.module.css";
import Card from "../components/Card.tsx";
import {
    SiCypress, SiGit,
    SiJunit5, SiLetsencrypt,
    SiMariadb,
    SiMysql, SiNginx,
    SiPostgresql,
    SiReact, SiRtl, SiSonarqubeserver,
    SiSpringboot,
    SiTypescript,
    SiVitest
} from "react-icons/si";
import "devicon/devicon-base.css";
import {Bug, Code, Database, Terminal} from "lucide-react";
import Section from "../components/Section.tsx";
import {useTranslation} from "react-i18next";

const Skills = () => {
    const {t} = useTranslation();

    const skills = [
        {
            key: "skills_languages_and_frameworks",
            icon: <Code/>,
            title: t("skills_languages_and_frameworks"),
            children:
            <ul className={styles.techGroup}>
                <li><i className={`devicon-java-plain ${styles.techIcon}`} />Java</li>
                <li><SiSpringboot className={styles.techIcon} />Spring Boot</li>
                <li><SiTypescript className={styles.techIcon} />TypeScript</li>
                <li><SiReact className={styles.techIcon} />React</li>
            </ul>
        },
        {
            key: "skills_databases",
            icon: <Database/>,
            title: t("skills_databases"),
            children:
                <ul className={styles.techGroup}>
                    <li><SiMysql className={styles.techIcon} />MySQL</li>
                    <li><SiMariadb className={styles.techIcon} />MariaDB</li>
                    <li><SiPostgresql className={styles.techIcon} />PostgreSQL</li>
                </ul>
        },
        {
            key: "skills_testing",
            icon: <Bug />,
            title: t("skills_testing"),
            children:
                <ul className={styles.techGroup}>
                    <li><SiJunit5 className={styles.techIcon} />JUnit 5</li>
                    <li>Mockito</li>
                    <li><SiVitest className={styles.techIcon} />Vitest</li>
                    <li><SiRtl className={styles.techIcon} />React Testing Library</li>
                    <li><SiCypress className={styles.techIcon} />Cypress</li>
                </ul>
        },
        {
            key: "skills_devops",
            icon: <Terminal />,
            title: t("skills_devops"),
            children:
                <ul className={styles.techGroup}>
                    <li><SiGit className={styles.techIcon} />Git</li>
                    <li><SiSonarqubeserver className={styles.techIcon} />SonarQube</li>
                    <li><SiNginx className={styles.techIcon} />Nginx</li>
                    <li>systemd</li>
                    <li><SiLetsencrypt className={styles.techIcon} />Certbot</li>
                </ul>
        }
    ]

    return (
        <Section id="skills" title={t("skills_heading")}>
            <div className={styles.skillCards}>
                {skills.map((skill) => (
                    <Card key={skill.key} title={skill.title} icon={skill.icon}>{skill.children}</Card>
                ))}
            </div>
        </Section>
    )
}

export default Skills;