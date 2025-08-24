import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const ExperienceItem = ({ experience, index }: { experience: any; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeInUp}
      className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-16`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.02, rotateY: isEven ? -2 : 2 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group hover:border-blue-400/50 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">
            {experience.duration}
          </span>
          <h3 className="text-2xl font-bold text-white mt-2 mb-1">
            {experience.title}
          </h3>
          <h4 className="text-purple-400 font-semibold mb-4">
            {experience.company}
          </h4>
          <p className="text-gray-300 leading-relaxed">
            {experience.description}
          </p>
        </motion.div>
      </div>

      {/* Icon */}
      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg"
        >
          {experience.icon}
        </motion.div>
        
        {/* Connecting Line */}
        {index < portfolioData.experience.length - 1 && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-blue-600 to-purple-600"></div>
        )}
      </div>

      {/* Spacer for alignment */}
      <div className="flex-1 hidden md:block"></div>
    </motion.div>
  );
};

const Experience = () => {
  const { experience } = portfolioData;
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            My career progression and key milestones in web development
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="relative"
        >
          {experience.map((exp, index) => (
            <ExperienceItem key={exp.id} experience={exp} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;