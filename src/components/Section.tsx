import type {ReactNode} from "react";
import styles from "./Section.module.css";

interface SectionProps {
    id: string;
    title: string;
    children: ReactNode;
}

const Section = ({id, title, children}: SectionProps) => {
    return (
        <section id={id} className={styles.section}>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </section>
    )
}

export default Section;