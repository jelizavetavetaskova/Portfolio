import "./About.css";
import Card from "../components/Card.tsx";
import {Book, Code, Puzzle, Rocket} from "lucide-react";

const About = () => {
    const cards = [
        {
            title: "Problem Solver",
            children: <>Turning complex requirements into simple solutions.</>,
            icon: <Puzzle/>
        },
        {
            title: "Continuous learner",
            children: <>Always exploring new technologies and improving my skills.</>,
            icon: <Book/>
        },
        {
            title: "Clean Code",
            children: <>Writing maintainable, readable, and reliable software.</>,
            icon: <Code/>
        },
        {
            title: "Product Mindset",
            children: <>Building applications that solve real problems for real users.</>,
            icon: <Rocket/>
        }
    ]

    return (
        <section id="about">
            <div className="about-text">
                <h1>A bit about me</h1>

                <p>
                    What drew me to software development was curiosity. What keeps me here is the opportunity to solve
                    real problems and build products that people actually use.
                </p>
                <p>
                    I build full-stack web applications using Spring Boot and React, from backend APIs to responsive
                    user interfaces. I believe that great products are built on clean architecture, thoughtful UX, and
                    attention to detail.
                </p>
                <p>
                    For me, every project is more than an opportunity to write code - it's a chance to create something
                    truly useful.
                </p>
            </div>

            <div className="about-cards">
                {cards.map((card) => (
                    <Card title={card.title} icon={card.icon}>{card.children}</Card>
                ))}
            </div>
        </section>
    )
}

export default About;