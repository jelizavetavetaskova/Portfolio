import styles from "./About.module.css";
import Card from "../components/Card.tsx";
import {Book, Code, Puzzle, Rocket} from "lucide-react";
import Section from "../components/Section.tsx";
import {useTranslation} from "react-i18next";

const About = () => {
    const {t} = useTranslation();

    const cards = [
        {
            key: "about_problem_solver",
            title: t("about_problem_solver"),
            children: <>{t("about_problem_solver_description")}</>,
            icon: <Puzzle/>
        },
        {
            key: "about_continuous_learner",
            title: t("about_continuous_learner"),
            children: <>{t("about_continuous_learner_description")}</>,
            icon: <Book/>
        },
        {
            key: "about_clean_code",
            title: t("about_clean_code"),
            children: <>{t("about_clean_code_description")}</>,
            icon: <Code/>
        },
        {
            key: "about_product_mindset",
            title: t("about_product_mindset"),
            children: <>{t("about_product_mindset_description")}</>,
            icon: <Rocket/>
        }
    ]

    return (
        <Section id="about" title={t("about_heading")}>
            <div className={styles.about}>
                <div className={styles.aboutText}>
                    <p>{t("about_motivation")}</p>
                    <p>{t("about_what_i_do")}</p>
                    <p>{t("about_attitude")}</p>
                </div>

                <div className={styles.aboutCards}>
                    {cards.map((card) => (
                        <Card key={card.key} title={card.title} icon={card.icon}>{card.children}</Card>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default About;