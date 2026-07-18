import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import GithubActivity from './components/GithubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  useEffect(() => {
    // Scroll-triggered entrance animations using IntersectionObserver
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Unobserve once animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen overflow-x-hidden custom-scrollbar selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Navbar Header */}
      <Header />

      {/* Main Sections */}
      <main className="w-full">
        {/* Hero Section */}
        <Hero />

        {/* Bento About Section */}
        <About />

        {/* Technical Arsenal Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />

        {/* Education & Experience Section */}
        <Timeline />

        {/* Certificates Showcase Section */}
        <Certifications />

        {/* Open Source GitHub Activity Section */}
        <GithubActivity />

        {/* Contact Form & Connection Info Section */}
        <Contact />
      </main>

      {/* Floating Theme Toggle Widget */}
      <ThemeToggle />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
