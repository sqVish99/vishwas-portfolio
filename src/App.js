import React, { useEffect, useRef } from "react";
import "./App.css";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import ChatbotButton from "./components/ChatbotButton/ChatbotButton";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.location.hash = entry.target.id;
          }
        });
      },
      { threshold: 0.7 }
    );

    observer.observe(homeRef.current);
    observer.observe(aboutRef.current);
    observer.observe(projectsRef.current);
    observer.observe(contactRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="App">
        <section id="home" ref={homeRef} className="home-section">
          <Home />
        </section>
        <section id="about" ref={aboutRef} className="about-section">
          <About />
        </section>
        <section id="projects" ref={projectsRef} className="projects-section">
          <Projects />
        </section>
        <section id="contact" ref={contactRef} className="contact-section">
          <Contact />
        </section>
      </div>
      {/* <ChatbotButton /> */}
    </Router>
  );
};

export default App;
