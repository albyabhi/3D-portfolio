import About from "./sections/About"
import Clients from "./sections/Clients"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import NavBar from "./sections/NavBar"
import Projects from "./sections/Projects"


const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      {/* <Clients /> */}
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </main>
  )
}

export default App