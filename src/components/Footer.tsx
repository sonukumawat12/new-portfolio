import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUp, Heart, Code, Coffee, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const footerY = useTransform(scrollYProgress, [0.8, 1], [50, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = {
    Github,
    Linkedin, 
    Twitter,
    Mail
  };

  return (
    <motion.footer 
      style={{ y: footerY }}
      className="bg-gradient-to-br from-gray-950 via-blue-950/10 to-purple-950/10 border-t border-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 py-16 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.05),transparent_70%)]"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-1/4 text-blue-500/10 text-6xl"
        >
          ⚡
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-1/4 text-purple-500/10 text-5xl"
        >
          🚀
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              {portfolioData.personal.name}
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Crafting digital experiences with passion and precision
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-400" />
              </motion.div>
              <span>and</span>
              <Coffee size={16} className="text-amber-400" />
              <Code size={16} className="text-green-400" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 5, color: "#60a5fa" }}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="text-xl font-semibold text-white mb-6">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              {portfolioData.social.map((social) => {
                const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-blue-400/50 transition-all duration-300"
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-gray-500 text-sm">
              {portfolioData.personal.email}
            </p>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-sm">
            {new Date().getFullYear()} {portfolioData.personal.name}. Designed & Built with React + TypeScript
          </p>
        </motion.div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 z-50 group"
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowUp size={24} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </motion.button>
    </motion.footer>
  );
};

export default Footer;