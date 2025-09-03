import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Enhanced smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="bg-gray-950 min-h-screen scroll-snap-container will-change-scroll">

      
      <Navigation />
      
      <main className="relative">
        <section className="scroll-snap-section">
          <Hero />
        </section>
        
        <section className="scroll-snap-section">
          <About />
        </section>
        
        <section className="scroll-snap-section">
          <Skills />
        </section>
        
        <section className="scroll-snap-section">
          <Projects />
        </section>
        
        <section className="scroll-snap-section">
          <Experience />
        </section>
        
        <section className="scroll-snap-section">
          <Certifications />
        </section>
        
        <section className="scroll-snap-section">
          <Contact />
        </section>
        
        <Footer />
      </main>
    </div>
  );
}

export default App;