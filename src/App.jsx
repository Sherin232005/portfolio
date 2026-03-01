import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CinematicBackground from './components/3d/CinematicBackground';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleContextClick = (e) => {
      const ripple = document.createElement('div');
      ripple.className = 'energy-ripple';
      ripple.style.left = `${e.clientX - 25}px`;
      ripple.style.top = `${e.clientY - 25}px`;
      ripple.style.width = '50px';
      ripple.style.height = '50px';
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    window.addEventListener('mousedown', handleContextClick);
    return () => window.removeEventListener('mousedown', handleContextClick);
  }, []);

  return (
    <div className="bg-transparent min-h-screen text-white selection:bg-marvel-blue/30 overflow-x-hidden">
      <CinematicBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
