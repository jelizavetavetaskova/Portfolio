import styles from "./Footer.module.css"
import {Copyright} from "lucide-react";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.icon}>
                <img src="/fox.png" alt="logo"/>
            </div>

            <div className={styles.copyright}>
                <Copyright className={styles.copyrightIcon}/>
                <p className={styles.copyrightText}>Jelizaveta Vetaskova, 2026</p>
            </div>

            <div className={styles.attribution}>
                Icons made by
                <a href="https://www.flaticon.com/authors/graficon" title="Graficon" className={styles.link}> Graficon </a>
                from
                <a href="https://www.flaticon.com/" title="Flaticon" className={styles.link}> www.flaticon.com</a>
            </div>
        </div>
    )
}

export default Footer;