import { useState, useCallback, memo, useMemo } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useThrottledScroll } from '../hooks/useScrollAnimation';

const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback((scrollY: number) => {
    setScrolled(scrollY > 50);
  }, []);

  useThrottledScroll(handleScroll);

  const navItems = useMemo(() => [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ], []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-950/90 backdrop-blur-xl border-b border-white/10 shadow-xl' 
          : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            <Sparkles size={24} className="text-blue-400" />
            SONU KUMAWAT
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-600/10 transition-all duration-200 relative group rounded-lg"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-3/4 transition-all duration-200 rounded-full"></span>
              </a>
            ))}
            
            <a
              href="#contact"
              className="ml-4 px-6 py-2 gradient-button rounded-full text-white font-medium"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl text-white hover:border-blue-400/50 transition-all duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border border-white/10 rounded-2xl mt-4 p-6 mb-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
              
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 px-4 py-3 gradient-button rounded-lg text-white font-medium text-center"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;