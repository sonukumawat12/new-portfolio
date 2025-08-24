import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation, fadeInUp, gridStagger, cardHover, iconHover } from '../hooks/useScrollAnimation';

const Certifications = () => {
  const { certifications } = portfolioData;
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
          >
            Certifications & <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Achievements</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6 sm:mb-8"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4"
          >
            Professional certifications and achievements that demonstrate my expertise and commitment to continuous learning
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.12,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                y: -4,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 h-full transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <motion.div 
                    className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 5,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    {cert.icon}
                  </motion.div>
                 
                 {/* Title */}
                 <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                   {cert.title}
                 </h3>
                 
                 {/* Issuer */}
                 <p className="text-blue-400 font-semibold mb-2 text-sm sm:text-base">
                   {cert.issuer}
                 </p>
                 
                 {/* Year */}
                 <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                   {cert.year}
                 </div>
                 
                 {/* Description */}
                 <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-grow">
                   {cert.description}
                 </p>
                 
                 {/* Hover effect overlay */}
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
               </div>
             </div>
           </motion.div>
         ))}
       </motion.div>
     </div>
   </section>
 );
};

export default Certifications;
