import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import About from "./Components/about/About";
import Skills from "./Components/skills/Skills";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/experiance/Experiance";
import Contact from "./Components/Contacts/Contact";
import Footer from "./Components/footer/Footer";
import { trackVisitor } from "./services/analyticsService"
import { useEffect } from "react";

function App() {

  useEffect(() => {
    // Fires once when the portfolio loads on localhost or production
    trackVisitor();
  }, []);
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;