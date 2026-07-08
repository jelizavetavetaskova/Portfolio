import './App.css'
import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx";
import Skills from "./sections/Skills.tsx";

function App() {
  return (
      <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
      </>
  )
}

export default App
