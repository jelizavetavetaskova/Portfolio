import styles from "./Contacts.module.css";
import Card from "../components/Card.tsx";
import {MdEmail} from "react-icons/md";
import {SiGithub} from "react-icons/si";
import {SlSocialLinkedin} from "react-icons/sl";

const Contacts = () => {
    return (
        <section id="contacts">
            <div className={styles.contactsSection}>
                <h1 className={styles.title}>How to reach me</h1>

                <div className={styles.contacts}>
                    <a href="mailto:vetaskovaelizaveta741@gmail.com" className={styles.link}>
                        <Card title="Email" icon={<MdEmail className={styles.icon}/>}>
                            <p>vetaskovaelizaveta741@gmail.com</p>
                        </Card>
                    </a>
                    <a
                        href="https://github.com/jelizavetavetaskova"
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Card title="GitHub" icon={<SiGithub className={styles.icon}/>}>
                            <p>github.com/jelizavetavetaskova</p>
                        </Card>
                    </a>
                    <a
                        href="https://linkedin.com/in/jelizaveta-vetaskova-ba20543b2/"
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Card title="LinkedIn" icon={<SlSocialLinkedin className={styles.icon}/>}>
                            <p>linkedin.com/in/jelizaveta-vetaskova-ba20543b2/</p>
                        </Card>
                    </a>
                </div>
            </div>

            <div className={styles.image}>
                <img src="/fox-for-about.png" alt="mascot"/>
            </div>
        </section>
    )
}

export default Contacts;