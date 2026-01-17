
import React, { useEffect, useState } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Background from "./components/Background";

function App() {
  // Persist background mode in localStorage so it survives reloads
  const [bgMode, setBgMode] = useState(() => {
    try {
      // default to 'color' so the site uses the supplied background color by default
      return localStorage.getItem("bgMode") || "color";
    } catch {
      return "color";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("bgMode", bgMode);
    } catch {
      /* ignore */
    }
  }, [bgMode]);

  const toggleBg = () => setBgMode((s) => (s === "particles" ? "color" : "particles"));

  return (
    <>
  {/* Key ensures Background fully remounts when mode changes (reinitializes canvas) */}
  <Background key={bgMode} mode={bgMode} overlay={0} particleCount={300} particleColor={"255,255,255"} backgroundColor={'#030712'} />

      <section className="relative z-10">
        <Navbar bgMode={bgMode} toggleBg={toggleBg} />
        <Hero />
        <About />
        <Skills />
        <Service />
        <Portfolio />
        <Contact />
        <Footer />
      </section>
    </>
  );
}

export default App;

