import './App.css'
import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx";
import Skills from "./sections/Skills.tsx";
import Projects from "./sections/Projects.tsx";
import Contacts from "./sections/Contacts.tsx";
import Footer from "./components/Footer.tsx";
import {ThemeContext} from "./context/ThemeContext.ts";
import {useEffect, useState} from "react";

function App() {
    const [theme, setTheme] = useState<"dark"|"light">("dark");

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.classList.add("light-theme");
        } else if (theme === "dark") {
            document.documentElement.classList.remove("light-theme");
        }
    }, [theme]);

    return (
      <ThemeContext value={{theme, setTheme}}>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contacts />
          <Footer />
      </ThemeContext>
    )
}

export default App;
