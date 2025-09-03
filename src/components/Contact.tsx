import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Github, Linkedin, Twitter, MessageSquare, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const SocialIcon = ({ icon }: { name: string; icon: string }) => {
  const iconMap: { [key: string]: any } = {
    Github,
    Linkedin,
    Twitter,
    Mail,
  };
  
  const IconComponent = iconMap[icon];
  
  return (
    <motion.a
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      href={portfolioData.social.find(s => s.icon === icon)?.url}
      className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-blue-400/50 transition-all duration-300 group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <IconComponent size={24} className="relative z-10" />
    </motion.a>
  );
};

const Contact = () => {
  const { personal } = portfolioData;
  const { ref, controls } = useScrollAnimation();
  const { scrollYProgress } = useScroll();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Enhanced background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-rose-950/20 to-gray-950"></div>
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]"
      ></motion.div>
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"
      ></motion.div>
      
      {/* Floating message icons */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 text-rose-500/20 text-4xl"
        >
          💬
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 text-blue-500/20 text-5xl"
        >
          📧
        </motion.div>
      </div>
      
      <motion.div 
        style={{ y }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Enhanced Header */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-500/10 to-blue-500/10 border border-rose-400/20 rounded-full mb-8"
          >
            <MessageSquare size={20} className="text-rose-400" />
            <span className="text-rose-400 font-medium tracking-wider">LET'S CONNECT</span>
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-3xl lg:text-5xl font-bold text-white mb-6"
          >
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
              Touch
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
            </span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Ready to bring your vision to life? Let's create something amazing together
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                      required
                    />
                  </div>
                </div>
                
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                  required
                />
                
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-200 resize-none"
                  required
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:from-green-400 hover:to-emerald-400 hover:shadow-xl hover:shadow-green-400/30 transition-all duration-300 shadow-lg shadow-green-500/20"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">{personal.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">{personal.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">{personal.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {portfolioData.social.map((social) => (
                    <SocialIcon key={social.name} name={social.name} icon={social.icon} />
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-lg border border-blue-400/20 rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                  <Zap size={32} className="text-white" />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Quick Response</h4>
              <p className="text-gray-400 mb-6">
                I typically respond within 24 hours. Let's discuss your project!
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white font-semibold hover:from-green-400 hover:to-emerald-400 hover:shadow-xl hover:shadow-green-400/30 transition-all duration-300 shadow-lg shadow-green-500/20"
              >
                <Mail size={18} />
                Email Directly
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;