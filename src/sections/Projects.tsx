import styles from "./Projects.module.css";
import Card from "../components/Card.tsx";
import {SiGithub, SiReact, SiSupabase, SiTypescript, SiVite, SiYoutube} from "react-icons/si";

const Projects = () => {
    return (
        <section id="projects">
            <h1 className={styles.title}>Things I've built</h1>
            <div className={styles.projects}>
                <Card title="SKAITRIXA" titleClassName={styles.projectTitle}>
                    <h4>Mental math training platform for primary school students</h4>
                    <div className={styles.stack}>
                        <SiTypescript className={styles.icon} />
                        <SiReact className={styles.icon}/>
                        <SiSupabase className={styles.icon} />
                        <SiVite className={styles.icon} />
                    </div>
                    <div className={styles.description}>
                        <p>
                            Developed the full application cycle - from database structure to a PWA with offline mode.
                            Built an admin panel with CRUD for schools, classes and users, plus a system for teachers to
                            create tests and students to complete them. Wrote unit tests (Vitest + React Testing
                            Library) and E2E tests (Cypress).
                        </p>
                    </div>
                    <div className={styles.links}>
                        <a href="https://github.com/jelizavetavetaskova/skaitrixa"><SiGithub/></a>
                        <a href="https://youtu.be/FYpPr9n7ZOU"><SiYoutube /></a>
                    </div>
                </Card>
                <Card title="Coming soon..." titleClassName={styles.projectTitle}>
                    <h4>Something exciting is on its way...</h4>
                </Card>
            </div>
        </section>
    )
}

export default Projects;