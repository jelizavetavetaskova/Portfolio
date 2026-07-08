import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.about}>
                <div className={styles.hello}>
                    <p>Hello! I am a</p>
                    <h1><span>Fullstack</span> Developer</h1>
                </div>
                <div className={styles.description}>
                    <p>
                        I develop web applications using Spring Boot and React. Passionate about solving real-world
                        problems, clean code, automation, and user-friendly interfaces.
                    </p>
                </div>
                <div className={styles.buttons}>
                    <a href="#projects" className={styles.projectsLink}>My projects</a>
                    <button className={styles.cvButton}>Download CV</button>
                </div>
            </div>

            <div className={styles.mascot}>
                <img src="/fox-for-about.png" alt="fox"/>
            </div>
        </section>
    )
}

export default Hero;