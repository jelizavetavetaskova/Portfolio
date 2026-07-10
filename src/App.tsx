import './App.css'
import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx";
import Skills from "./sections/Skills.tsx";
import Projects from "./sections/Projects.tsx";
import Contacts from "./sections/Contacts.tsx";

function App() {
  return (
      <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contacts />
      </>
  )
}

export default App
