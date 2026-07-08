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

const Skills = () => {
    const skills = [
        {
            icon: <Code/>,
            title: "Languages & Frameworks",
            children:
            <ul className={styles.techGroup}>
                <li><i className="devicon-java-plain tech-icon" />Java</li>
                <li><SiSpringboot className={styles.techIcon} />Spring Boot</li>
                <li><SiTypescript className={styles.techIcon} />TypeScript</li>
                <li><SiReact className={styles.techIcon} />React</li>
            </ul>
        },
        {
            icon: <Database/>,
            title: "Databases",
            children:
                <ul className={styles.techGroup}>
                    <li><SiMysql className={styles.techIcon} />MySQL</li>
                    <li><SiMariadb className={styles.techIcon} />MariaDB</li>
                    <li><SiPostgresql className={styles.techIcon} />PostgreSQL</li>
                </ul>
        },
        {
            icon: <Bug />,
            title: "Testing",
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
            icon: <Terminal />,
            title: "Version Control & DevOps",
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
        <section id="skills">
            <h1>My Skills</h1>

            <div className={styles.skillCards}>
                {skills.map((skill) => (
                    <Card key={skill.title} title={skill.title} icon={skill.icon}>{skill.children}</Card>
                ))}
            </div>
        </section>
    )
}

export default Skills;