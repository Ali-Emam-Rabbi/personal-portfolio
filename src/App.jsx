import React from "react";
import "./styles/global.css";
import "./styles/app.css";
import AuraBackground from "./components/AuraBackground";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";
import useReveal, { useActiveSection } from "./hooks/useReveal";

const sectionIds = ["top", "work", "tools", "contact"];

function App() {
  useReveal();
  useActiveSection(sectionIds);

  return (
    <div className="App">
      <a href="#content" className="skip-link">Skip to content</a>
      <AuraBackground />
      <Navbar />
      <main id="content">
        <Hero />
        <Projects />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
