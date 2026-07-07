import './App.css'
import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx";

function App() {
  return (
      <>
          <Navbar />
          <Hero />
          <About />
      </>
  )
}

export default App
