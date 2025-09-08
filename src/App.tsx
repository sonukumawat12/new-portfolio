import { useEffect, lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {

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
        <Suspense fallback={<LoadingSpinner />}>
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
        </Suspense>
      </main>
    </div>
  );
}

export default App;