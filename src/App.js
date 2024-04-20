import React from 'react';
import './App.css';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';

const App = () => {
  return (
    <div className="App">
      <section id="home" className="home-section"><Home /></section>
      <section id="about" className="about-section"><About /></section>
      <section id="projects" className="projects-section"><Projects /></section>
      <section id="contact" className="contact-section"><Contact /></section>
    </div>
  );
}

export default App;