import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="about">
                <div className="hello">
                    <p>Hello! I am a</p>
                    <h1><span>Fullstack</span> Developer</h1>
                </div>
                <div className="description">
                    <p>
                        I develop web applications using Spring Boot and React. Passionate about solving real-world
                        problems, clean code, automation, and user-friendly interfaces.
                    </p>
                </div>
                <div className="buttons">
                    <a href="#projects" className="projects-link">My projects</a>
                    <button className="cv-button">Download CV</button>
                </div>
            </div>

            <div className="mascot">
                <img src="/fox-for-about.png" alt="fox"/>
            </div>
        </section>
    )
}

export default Hero;