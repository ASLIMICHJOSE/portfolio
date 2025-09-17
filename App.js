import React, { useEffect } from "react";
import Typed from "typed.js";
import Particles from "react-tsparticles";
import "./App.css";

function App() {
  useEffect(() => {
    const typed = new Typed("#typed-el", {
      strings: ["Frontend Developer", "Performance Fanatic", "Figma → Code"],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 800,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="App">
      {/* Particle background */}
      <Particles
        options={{
          background: { color: "#0a0a0a" },
          particles: {
            number: { value: 80 },
            size: { value: 3 },
            move: { speed: 2 },
            links: { enable: true, color: "#ffffff" },
          },
        }}
      />

      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">Asli Mich Jose</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I’m <span className="name">Asli Mich Jose</span></h1>
        <h2><span id="typed-el"></span></h2>
        <p>I build modern, high-performance websites that turn Figma designs into code.</p>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I’m a frontend developer passionate about creating smooth, responsive, 
          and accessible user interfaces. My toolkit includes React, Tailwind, 
          and modern JS frameworks.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <article className="project-card">Portfolio Website</article>
          <article className="project-card">E-commerce UI</article>
          <article className="project-card">AI Chatbot</article>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;
